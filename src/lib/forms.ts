const FORM_ENDPOINT = 'https://formsubmit.co/ajax/saivatika4@gmail.com'

export async function submitLead(payload: Record<string, string>) {
  const formData = new FormData()
  Object.entries(payload).forEach(([key, value]) => formData.append(key, value))

  // FormSubmit helpers
  formData.append('_subject', 'New enquiry - Sai Vatika')
  formData.append('_captcha', 'false')

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!response.ok) {
      const message = await response.text().catch(() => 'Unable to submit form right now.')
      throw new Error(message || 'Unable to submit form right now. Please try again in a moment.')
    }

    const json = await response.json().catch(() => ({}))
    return { ok: true, ...json }
  } catch (error) {
    clearTimeout(timeout)
    if ((error as Error).name === 'AbortError') {
      throw new Error('Request timed out. Please try again.')
    }
    throw new Error('Unable to submit your request right now. Please try again shortly.')
  }
}
