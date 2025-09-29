"use client"

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate(): string | null {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim()) return 'Please enter your email.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Please enter a valid email.'
    if (!form.subject.trim()) return 'Please enter a subject.'
    if (!form.message.trim()) return 'Please enter a message.'
    return null
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    setSubmitting(true)

    async function sendEmail() {
      const data = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      .then(response => response.json())
      .then(data =>{
        if(!data.success){
          setError(data.message)
        } else {
          setError(null)
          setSubmitting(false)
          setSubmitted(true)
          setForm(initialState)
        }
      });
    }
    sendEmail();
  }

  return (
    <div className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 transition">
          Thank you! Your message has been sent. We will get back to you shortly.
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 transition">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="group">
            <label className="block text-sm font-medium text-secondary mb-2">Name*</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="Your full name"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-secondary mb-2">Email*</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-secondary mb-2">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-secondary mb-2">Subject*</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="What is this about?"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-secondary mb-2">Message*</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="How can we help you?"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-orange-600 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${submitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
          >
            {submitting ? (
              <>
                <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75" />
                </svg>
                Sending...
              </>
            ) : (
              <>Send Message</>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}


