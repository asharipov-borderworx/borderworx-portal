'use client'

import { useState } from 'react'
import { getContactInfo } from '@/utils/contactInfo'
import { InlineWidget, PopupWidget } from 'react-calendly'

interface BookingFormData {
  name: string
  email: string
  company: string
  phone: string
  preferredDate: string
  preferredTime: string
  topic: string
  message: string
}

interface MeetingBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function MeetingBooking({ isOpen, onClose }: MeetingBookingProps) {
  const contactInfo = getContactInfo()
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    topic: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCalendlyClick = () => {
    setShowCalendly(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to Calendly with prefilled information
    const calendlyUrl = `${contactInfo.calendly.url}?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`
    window.open(calendlyUrl, '_blank')
    onClose()
  }

  const topics = [
    'Freight Forwarding',
    'Warehousing Solutions',
    'Customs Clearance',
    'Express Delivery',
    'Supply Chain Optimization',
    'Global Tracking',
    'General Consultation',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary">Schedule a Meeting</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!showCalendly ? (
          <div>
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-6">
                Choose how you'd like to schedule your meeting with our logistics experts.
              </p>
              
              {/* Quick Calendly Option */}
              <div className="hero-gradient rounded-xl p-6 text-white mb-6">
                <h3 className="text-xl font-semibold mb-3">📅 Instant Scheduling</h3>
                <p className="text-orange-100 mb-4">
                  Book directly using our calendar - choose your preferred time and receive an instant confirmation email.
                </p>
                <button
                  onClick={handleCalendlyClick}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Open Calendar
                </button>
              </div>

              <div className="text-center mb-4">
                <span className="text-gray-400">or</span>
              </div>

              <h3 className="text-lg font-semibold text-secondary mb-4">
                📝 Fill out your details first
              </h3>
            </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              Meeting Topic *
            </label>
            <select
              id="topic"
              name="topic"
              required
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            >
              <option value="">Select topic</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
              placeholder="Please provide any additional details about your logistics needs..."
            ></textarea>
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary"
            >
              Continue to Calendar
            </button>
          </div>
        </form>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <button
                onClick={() => setShowCalendly(false)}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Options
              </button>
            </div>
            
            {/* Calendly Inline Widget */}
            <div className="min-h-[600px]">
              <InlineWidget
                url={contactInfo.calendly.url}
                styles={{
                  height: '600px',
                  width: '100%'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: 'FF6B35',
                  textColor: '000000'
                }}
                prefill={{
                  email: formData.email || contactInfo.calendly.prefill.email,
                  firstName: formData.name.split(' ')[0] || '',
                  lastName: formData.name.split(' ').slice(1).join(' ') || '',
                  name: formData.name || ''
                }}
                utm={{
                  utmCampaign: 'BorderWorx Meeting',
                  utmSource: 'website',
                  utmMedium: 'booking_form'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
