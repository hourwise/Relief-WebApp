# Community intake plan

Status: **DECISION REQUIRED** — audit completed against the inspected mobile/backend source at `9cfda375912a84b9ea90b6a267f1678341b055eb`. No Supabase migration or production change is included in this WebApp batch.

## Current verified shape

The mobile app has an authenticated community workflow. `AddFacilityScreen` calls `submitFacility`, which inserts a pending row into `facility_submissions`; it does not insert directly into `facilities`. `CorrectInfoScreen` calls `submitCorrection` and writes one proposed field change to `correction_requests`. `ReportFacilityScreen` calls `submitTemporaryReport` and presents expiring issue reports.

The baseline schema also contains `facility_sources` for provenance, `photo_moderation` for pending/approved/rejected/reported photos, `user_badges` and badge definitions for existing contribution rewards, and `rate_limits` for authenticated actions. The canonical `facilities` table has publication and verification status fields plus `field_provenance`.

The inspected RLS allows authenticated users to insert their own submissions, corrections, reports, and photos. Service-role policies are used for moderation/admin updates. Anonymous users can read published/active material in the places allowed by the baseline, but anonymous writes are not supported by the current contribution tables.

There is an important source mismatch to resolve before relying on the mobile workflow as a production contract: the current baseline contains both `facility_reports` and `temporary_reports`, while the community service writes to `temporary_reports` and the report UI uses the temporary-report model. The canonical migration, generated types, and service should be reconciled by the mobile/backend owner before a web intake is connected.

## Three distinct concepts

### A. Add a missing facility

Submission → staging/moderation → review → approve/reject → canonical `facilities` record.

An approved record should receive or preserve provenance in `facility_sources` and `field_provenance`. A user submission must remain attributable internally for moderation, but public facility data should not expose unnecessary submitter details.

### B. Correct an existing facility

Specific facility and field → old value + proposed new value → evidence/provenance review → approve/reject → canonical update.

Corrections should be field-specific rather than a free-form rewrite of the whole facility. The existing mobile correction shape (`facility_id`, `field`, `old_value`, `new_value`, `notes`) is a useful starting point, but the allowed field list and evidence model need an explicit backend contract.

### C. Report a problem

Issue and facility → triage → resolve, dismiss, expire, or escalate.

The inspected mobile UI supports closed, out-of-order, cleaning, busy, no-water, and refurbishment reports, with different expiry durations. These are operational reports, not permanent facility edits and not public reviews.

## Add Facility reconciliation

The disabled WebApp form is not aligned with the inspected mobile submission schema:

| WebApp field | Finding | Recommended treatment |
| --- | --- | --- |
| `access_type` | No matching `facility_submissions` column or mobile submission field | Remove; use structured access notes/restrictions when contract exists |
| `opening_hours` string | Mobile/schema uses nullable `open_hours` JSON | Replace with a structured hours model, not a free-form string |
| `free_or_paid` | Maps to `is_free` plus `price_note` | Split into structured free/paid/unknown plus price note |
| `accessible_toilet` | No exact column; mobile uses `is_accessible` | Rename to the canonical field if kept |
| `wheelchair_access` | Mobile/schema uses `is_disabled_access` and canonical facilities also has `has_wheelchair_access` | Resolve the distinction before exposing it |
| `radar_key` | No matching submission column in the current baseline | Do not claim it is captured by this workflow |
| `changing_places` | No matching submission column in the current baseline | Do not claim it is captured by this workflow |
| `privacy_notes`, `cleanliness_notes` | No matching columns; the mobile form has general `notes` and `access_notes` | Replace with objective structured fields or general notes after approval |
| optional submitter name/email | Current mobile flow uses authenticated `user_id` | Do not treat anonymous contact fields as equivalent to the mobile identity model |
| optional latitude/longitude | Current submission schema requires coordinates; mobile currently sends `0` pending geocoding | Web must not accept unverified coordinates as canonical data |
| consent/honeypot | Web-only controls | Retain for any future web staging endpoint, but do not write to current authenticated tables |

The WebApp form is therefore kept disabled. It should eventually add objective source/evidence fields and explicit access restrictions, but it should not add subjective star ratings, public reviews, comments, social profiles, or reputation features.

## Recommended web architecture

Anonymous website intake should write to a dedicated server-side `web_intake_submissions` staging abstraction, or to an equivalent approved queue owned by a server-side function. It must not write to canonical `facilities`, and it should not bypass the mobile table's authenticated-user RLS assumptions.

The staging record should contain a submission type (`add_facility`, `correction`, or `problem_report`), a strict typed payload, evidence/source URLs where appropriate, a privacy-safe contact channel if follow-up is requested, spam/security metadata, status, timestamps, and moderation audit fields. Moderators should explicitly map an approved submission to the canonical tables and preserve provenance.

Before implementation, the mobile/backend owner should approve:

1. whether web submissions are allowed anonymously or require an account;
2. the canonical structured fields and enums for hours, access, cost, accessibility, and evidence;
3. the `facility_reports` versus `temporary_reports` contract;
4. retention, deletion, and access controls for the staging queue;
5. the moderation transition that creates or updates `facilities` and `facility_sources`.

No production schema change is proposed or applied in this batch. A migration should be designed only after those decisions are approved and the RLS/grants have been reviewed.
