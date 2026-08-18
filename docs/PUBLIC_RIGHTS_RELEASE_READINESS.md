# Relief public rights and store-readiness worksheet

Status: **repository preparation only — no App Store Connect or Play Console submission performed**

Prepared: 18 August 2026

Website source: `hourwise/Relief-WebApp`, reconciled from `origin/main`.

Operator wording used by the site: **Phil Geran trading as PCGsoft**, a UK sole trader. Any change to that identity requires accountable legal/business review.

## Candidate public URLs

| Purpose | Candidate URL | Repository route |
| --- | --- | --- |
| Privacy policy | `https://findrelief.co.uk/privacy` | `/privacy` |
| Support | `https://findrelief.co.uk/support` | `/support` |
| General contact | `https://findrelief.co.uk/contact` | `/contact` |
| GDPR and data rights | `https://findrelief.co.uk/gdpr` | `/gdpr` |
| Account deletion resource | `https://findrelief.co.uk/delete-account` | `/delete-account` |

The account-deletion URL is suitable for the eventual Google Play deletion-resource field only after the route is deployed and live-content verification succeeds.

## Current production data inventory

This inventory reflects the accepted mobile/backend facts supplied for this release batch. It separates what the current product does from features that remain disabled or deferred. It is not a legal conclusion and does not replace the platform questionnaires.

| Data or capability | Current production position | Linked to user? | Purpose | Service/provider context | Deletion/export treatment | Console follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| Email, auth identity, and sign-in account | Collected when an account is created or used | Yes | Authentication and account access | Supabase Auth | Auth secrets are excluded from export; account is normally removed after confirmed deletion unless the subscription-history guard blocks automated deletion | Confirm Apple/Google account-information category and required disclosure |
| Display name and profile information | Collected for the user profile | Yes | Profile, contribution attribution, and account features | Supabase database/Auth metadata | Normally removed with governed user-linked data; relevant export data is included | Confirm profile category, purpose, and linkage |
| Locally persisted authenticated session | Stored locally while the user is signed in | Device-local; not a public profile record | Keep the user signed in and support authenticated app use | Device storage and Supabase session handling | Not an authentication-secret export; local session is cleared by the app after confirmed deletion | Confirm whether the platform questionnaire treats the implementation as collected device data |
| Foreground device location | Used when the user permits location and uses discovery | Not described as a stored account record in the accepted contract | Find and sort nearby facilities and power nearest-facility search | Supabase-backed Relief queries; permission-controlled device location | Do not claim a retention period or export inclusion beyond the verified app contract | Confirm collection, linkage, sharing, and precise-purpose answers per platform |
| Favourites / saved places | Collected when an authenticated user saves a facility | Yes | Save facilities for later access | Supabase database | Normally removed and included in relevant account export | Confirm user-generated-content classification |
| Facility submissions | Authenticated user-linked contribution | Yes | Suggest facilities through a moderated workflow | Supabase database and server-side moderation | Normally removed from governed user-linked data; canonical/provenance records may remain with attribution removed where appropriate | Confirm user-generated-content and moderation treatment |
| Facility reports and temporary reports | Authenticated user-linked contribution | Yes | Report current facility problems and temporary conditions | Supabase database and server-side moderation/expiry controls | Normally removed from governed user-linked data; do not promise removal of every derived canonical/history record | Confirm purpose and retention wording |
| Corrections | Authenticated user-linked contribution | Yes | Suggest field-level corrections for review | Supabase database and server-side moderation | Normally removed from governed user-linked data; canonical/provenance history may remain where appropriate | Confirm user-generated-content classification |
| Access-code contributions | Authenticated user-linked contribution where enabled | Yes | Contribute access information through governed controls | Supabase database and moderation controls | Normally removed from governed user-linked data; export treatment follows the deployed export contract | Confirm whether this is presented as user-generated content |
| Governed badges | Derived account-linked application record | Yes | Recognise contribution activity | Supabase database and server-side rules | Normally removed with governed user-linked data and covered where relevant by export | Confirm derived-data purpose |
| Google Maps/directions handoff | User-initiated external navigation handoff on Android | Depends on the destination service’s handling | Show maps or continue directions in an external service | Google Maps, under Google’s own terms and notices | Not represented as a Relief account export; disclose the external handoff | Confirm platform-specific sharing classification |
| Website email correspondence | Separate public-site contact route; forms remain disabled | Depends on what the sender provides | Support, privacy, deletion, facility, and business enquiries | Cloudflare Email Routing and destination mailboxes | Kept only as reasonably needed; exact retention/provider arrangements remain legal-review items | Not part of mobile App Privacy/Data Safety unless the app routes users to it |
| Analytics/crash reporting | No dedicated platform verified | Not applicable | Not applicable | None claimed | Not applicable | Do not declare an analytics/crash provider without new evidence |

### Export boundaries

The in-app route is `Profile → Privacy & Data → Download my data`. The accepted contract produces versioned JSON in memory for normal device save/share. It includes relevant account-linked Relief data, excludes passwords, tokens, and authentication secrets, does not dump unrelated canonical/import/provenance datasets, and may omit protected internal moderation-summary information. Requesting an export does not change or delete the account.

### Deletion boundaries

The in-app route is `Profile → Delete account`. Recent authentication and explicit confirmation are required. The app reports success only after server-side cleanup and sign-in account removal are confirmed. Accounts associated with subscription or payment-history records currently fail closed while retention and anonymisation treatment remains unresolved; public copy must never present those requests as successful deletion.

## Disabled or deferred — do not declare as current production

- RevenueCat subscriptions or payment processing.
- OAuth providers.
- Public photo Storage or photo publication.
- Remote push notifications.
- Review submission.
- Automatic canonical publication of community contributions.

## Apple App Privacy preparation

Official references:

- [Manage app privacy](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy)
- [App Privacy reference](https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy/)
- [App Review Guidelines, privacy and account deletion](https://developer.apple.com/app-store/review/guidelines/)
- [Account deletion guidance](https://developer.apple.com/support/offering-account-deletion-in-your-app/)
- [Support URL requirements](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information)

Manual actions remaining:

1. Enter and verify the live privacy-policy URL.
2. Enter and verify the live support URL, which must lead to actual contact information.
3. Confirm the mobile app exposes the in-app deletion route for the submitted build.
4. Complete App Privacy data-type answers from the submitted binary, SDK inventory, and the table above.
5. Reconcile any differences between iOS implementation and the Android/current-production inventory before publishing answers.

## Google Play Data Safety and deletion preparation

Official references:

- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [Google Play account-deletion requirement](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en-EN)

Manual actions remaining:

1. Enter and verify the live privacy-policy URL in Play Console.
2. Enter `https://findrelief.co.uk/delete-account` as the external account-deletion resource only after live route verification.
3. Complete the Data Safety form for the submitted Android binary and all included SDKs.
4. Complete Google’s account/data-deletion declarations, including the in-app route and external resource.
5. Confirm the submitted build’s actual location permission behavior and any Google Maps SDK or handoff behavior.
6. Keep declarations synchronized with this site and update them if production processing changes.

## Legal and operational review gates

- Confirm the operator identity and any public address wording.
- Confirm Cloudflare Email Routing, destination mailbox, and provider/transfer wording.
- Approve correspondence retention procedure; no fixed period is invented in the public copy.
- Confirm that `privacy@findrelief.co.uk` and `support@findrelief.co.uk` are operational routes. This repository records the published addresses but does not claim mailbox delivery testing.
- Review the privacy, GDPR, and terms pages before final release classification.
