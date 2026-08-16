import type { APIResponse } from './types'

export async function submitPublicForm<T extends Record<string, unknown>>(
  endpoint: string,
  data: T,
  turnstileToken: string,
): Promise<APIResponse<{ reference?: string }>> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, turnstileToken }),
    })
    const result = await response.json().catch(() => ({})) as { ok?: boolean; reference?: string; error?: string }
    if (!response.ok || result.ok !== true) {
      return { success: false, error: result.error || 'The form could not be submitted.' }
    }
    return { success: true, data: { reference: result.reference } }
  } catch {
    return { success: false, error: 'The form could not be submitted. Please try again later.' }
  }
}
