"use client"

import { useState } from 'react'

type QuoteFormState = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  shipmentDetails: string
}

const initialState: QuoteFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  shipmentDetails: ''
}

export default function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate(): string | null {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim()) return 'Please enter your email.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.'
    if (!form.service.trim()) return 'Please select a service.'
    if (!form.shipmentDetails.trim()) return 'Please describe your shipment.'
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

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: `Quote Request: ${form.service}${form.company ? ` - ${form.company}` : ''}`,
      message: `Service: ${form.service}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nShipment Details:\n${form.shipmentDetails}`
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (!data.success) {
        setError(data.message || 'Failed to send your request.')
      } else {
        setError(null)
        setSubmitted(true)
        setForm(initialState)
      }
    } catch (err) {
      setError('Network error. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 transition">
          Thank you! Your quote request has been sent.
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
          <label className="block text-sm font-medium text-secondary mb-2">Company (optional)</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Your company name"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-secondary mb-2">Service*</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          >
            <option value="">Select a service</option>
            <option>Warehousing</option>
            <option>Warehousing & Distribution</option>
            <option>Customs Brokerage – Canada & USA</option>
            <option>Trade Compliance Consulting</option>
            <option>Section 321 Fulfillment Canada</option>
            <option>Amazon FBM Fulfillment</option>
            <option>Container Freight Station (CFS) Shipping Services</option>
            <option>Fulfillment by Amazon (FBA) Prepping Services</option>
          </select>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-secondary mb-2">Shipment details*</label>
          <textarea
            name="shipmentDetails"
            value={form.shipmentDetails}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Describe origin, destination, weight/volume, special handling, timing, etc."
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
              <>Request Quote</>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}


