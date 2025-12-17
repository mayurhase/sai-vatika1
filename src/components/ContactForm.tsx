import { useForm, ValidationError } from '@formspree/react'

export function ContactForm() {
  const [state, handleSubmit] = useForm('mzznlroz')

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-border/60 bg-panel p-8 text-center text-slate shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
        <p className="text-lg font-semibold text-ink">Thank you</p>
        <p className="mt-2 text-sm text-slate">Your enquiry is sent. We will connect shortly.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-border/60 bg-panel p-8 text-slate shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-xs uppercase tracking-[0.3em] text-slate" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-ink/50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-slate" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-ink/50"
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-slate" htmlFor="email">
          Email (optional)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-ink/50"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <input type="hidden" name="_subject" value="Sai Vatika website enquiry" />
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-[#0F281E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Send Enquiry'}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  )
}
