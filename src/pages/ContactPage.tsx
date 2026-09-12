
import { useState } from 'react'
import type { FormEvent } from 'react'

const offices = [
  {
    label: 'Head office',
    value: 'Gujarat, India',
    detail: 'Corporate and business enquiries',
  },
  {
    label: 'Manufacturing unit',
    value: 'Gujarat, India',
    detail: 'Production and formulation operations',
  },
  {
    label: 'Quality centre',
    value: 'Gujarat, India',
    detail: 'Testing and process consistency',
  },
  {
    label: 'Customer care',
    value: '+91 76007 61497',
    detail: 'Monday to Saturday, 9:00 AM to 6:00 PM',
  },
]

const WHATSAPP_NUMBER = '918200933711'

function ContactPage() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<
    'success' | 'error' | ''
  >('')

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setIsSending(true)
    setStatus('')
    setStatusType('')

    const form = new FormData(event.currentTarget)

    const name = String(form.get('name') || '').trim()
    const businessName = String(
      form.get('businessName') || '',
    ).trim()
    const contactName = String(
      form.get('contactName') || '',
    ).trim()
    const email = String(form.get('email') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const message = String(form.get('message') || '').trim()

    // Create professional WhatsApp enquiry message
    const whatsappMessage = `
🌿 *ARYADEV CHEMICALS*
━━━━━━━━━━━━━━━━━━━━

📩 *NEW CUSTOMER ENQUIRY*

👤 *Customer Details*

*Name:* ${name}

*Business Name:* ${businessName || 'Not provided'}

*Contact Name:* ${contactName}

📧 *Email:* ${email}

📞 *Phone:* ${phone || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━

💬 *Customer Message*

${message}

━━━━━━━━━━━━━━━━━━━━

📍 *Enquiry Source:* Website

Thank you for contacting Aryadev Chemicals.
`.trim()

    try {
      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}` +
        `?text=${encodeURIComponent(whatsappMessage)}`

      // Open WhatsApp with the enquiry message
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      setStatus(
        'WhatsApp opened. Please send the enquiry message.',
      )
      setStatusType('success')

      event.currentTarget.reset()
    } catch {
      setStatus(
        'Unable to open WhatsApp. Please try again.',
      )
      setStatusType('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 md:py-12">

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-4xl bg-[#123d29] p-6 text-white motion-safe:animate-[headerReveal_0.7s_ease-out] sm:p-8 md:p-12">

        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-limeGreen/20 blur-3xl" />

        <div className="relative z-10 max-w-3xl">

          <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.32em] text-limeGreen sm:text-sm">
            Customer enquiry
          </p>

          <h1 className="mt-4 font-poppinsBold text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
            Let&apos;s grow the right solution together.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Tell us what you need. Our team will review your enquiry and get back to you with the right next step.
          </p>

        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-primary/10 bg-white p-6 shadow-[0_18px_45px_rgba(19,61,41,0.06)] motion-safe:animate-[headerReveal_0.8s_ease-out] sm:p-8"
        >

          <div className="mb-7">

            <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
              Send an enquiry
            </p>

            <h2 className="mt-3 font-poppinsBold text-2xl font-bold leading-tight tracking-[0.01em] text-primary sm:text-3xl">
              Start a conversation
            </h2>

            <p className="mt-3 text-sm leading-6 text-primary/60">
              Share your requirements with Aryadev Chemicals.
              Our team will connect with you through WhatsApp.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {/* Name */}
            <label className="text-sm font-semibold leading-6 text-primary">
              Name *

              <input
                name="name"
                required
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-primary/15 bg-[#f8faf6] px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-primary/35 hover:border-brandColor/40 focus:border-brandColor focus:ring-4 focus:ring-brandColor/10"
              />
            </label>

            {/* Business Name */}
            <label className="text-sm font-semibold leading-6 text-primary">
              Business name{' '}
              <span className="font-normal text-primary/50">
                (optional)
              </span>

              <input
                name="businessName"
                placeholder="Enter business name"
                className="mt-2 w-full rounded-xl border border-primary/15 bg-[#f8faf6] px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-primary/35 hover:border-brandColor/40 focus:border-brandColor focus:ring-4 focus:ring-brandColor/10"
              />
            </label>

            {/* Contact Name */}
            <label className="text-sm font-semibold leading-6 text-primary">
              Contact name *

              <input
                name="contactName"
                required
                placeholder="Enter contact name"
                className="mt-2 w-full rounded-xl border border-primary/15 bg-[#f8faf6] px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-primary/35 hover:border-brandColor/40 focus:border-brandColor focus:ring-4 focus:ring-brandColor/10"
              />
            </label>

            {/* Email */}
            <label className="text-sm font-semibold leading-6 text-primary">
              Email *

              <input
                type="email"
                name="email"
                required
                placeholder="Enter email address"
                className="mt-2 w-full rounded-xl border border-primary/15 bg-[#f8faf6] px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-primary/35 hover:border-brandColor/40 focus:border-brandColor focus:ring-4 focus:ring-brandColor/10"
              />
            </label>

            {/* Phone */}
            <label className="text-sm font-semibold leading-6 text-primary sm:col-span-2">
              Phone number

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="mt-2 w-full rounded-xl border border-primary/15 bg-[#f8faf6] px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-primary/35 hover:border-brandColor/40 focus:border-brandColor focus:ring-4 focus:ring-brandColor/10"
              />
            </label>

            {/* Message */}
            <label className="text-sm font-semibold leading-6 text-primary sm:col-span-2">
              How can we help? *

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your enquiry or product requirement..."
                className="mt-2 w-full resize-y rounded-xl border border-primary/15 bg-[#f8faf6] px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-primary/35 hover:border-brandColor/40 focus:border-brandColor focus:ring-4 focus:ring-brandColor/10"
              />
            </label>

          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">

            <button
              type="submit"
              disabled={isSending}
              className="w-full cursor-pointer rounded-full bg-brandColor px-6 py-3 font-poppins text-sm font-semibold tracking-[0.01em] text-white transition hover:-translate-y-0.5 hover:bg-[#0d6c30] hover:shadow-[0_10px_20px_rgba(17,129,58,0.2)] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
            >
              {isSending
                ? 'Opening WhatsApp...'
                : 'Send enquiry on WhatsApp'}
            </button>

            {status && (
              <p
                role="status"
                className={`wrap-break-word text-sm font-semibold ${
                  statusType === 'error'
                    ? 'text-red-700'
                    : 'text-brandColor'
                }`}
              >
                {status}
              </p>
            )}

          </div>

        </form>

        {/* Locations */}
        <aside className="space-y-4">

          <div className="rounded-[28px] bg-[#edf5ef] p-6 motion-safe:animate-[headerReveal_0.9s_ease-out] sm:p-8">

            <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
              Find Aryadev
            </p>

            <h2 className="mt-3 font-poppinsBold text-2xl font-bold text-primary">
              Our locations
            </h2>

            <div className="mt-6 space-y-3">

              {offices.map((office) => (
                <article
                  key={office.label}
                  className="group rounded-2xl border border-transparent bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-brandColor/15 hover:shadow-[0_12px_24px_rgba(17,129,58,0.08)]"
                >

                  <p className="font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-brandColor">
                    {office.label}
                  </p>

                  <p className="mt-2 font-poppinsBold text-base font-bold tracking-[0.01em] text-primary transition-colors group-hover:text-brandColor">
                    {office.value}
                  </p>

                  <p className="mt-1 text-sm text-primary/65">
                    {office.detail}
                  </p>

                </article>
              ))}

            </div>
          </div>

          {/* Email */}
          <div className="rounded-[28px] bg-[#123d29] p-6 text-white motion-safe:animate-[headerReveal_1s_ease-out] sm:p-8">

            <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-limeGreen">
              Email us directly
            </p>

            <a
              href="mailto:aryadev@yopmail.com"
              className="mt-3 block break-all font-poppinsBold text-xl font-bold text-white transition hover:text-limeGreen"
            >
              aryadev@yopmail.com
            </a>

          </div>

        </aside>

      </div>
    </section>
  )
}

export default ContactPage