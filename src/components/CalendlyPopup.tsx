'use client'

import { getContactInfo } from '@/utils/contactInfo'

interface CalendlyPopupProps {
  isOpen: boolean
  onClose: () => void
  prefillEmail?: string
  prefillName?: string
}

export default function CalendlyPopup({ isOpen, onClose, prefillEmail, prefillName }: CalendlyPopupProps) {
  const contactInfo = getContactInfo()

  const openCalendly = () => {
    const calendlyUrl = `${contactInfo.calendly.url}?embed_domain=${window.location.hostname}&embed_type=Inline`
    if (prefillEmail) {
      const url = new URL(calendlyUrl)
      url.searchParams.set('prefill_email', prefillEmail)
      if (prefillName) {
        url.searchParams.set('prefill_name', prefillName)
      }
      window.open(url.toString(), '_blank', 'width=800,height=700,scrollbars=yes,resizable=yes')
    } else {
      window.open(calendlyUrl, '_blank', 'width=800,height=700,scrollbars=yes,resizable=yes')
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Schedule Your Meeting
          </h3>
          <p className="text-gray-600 mb-6">
            Click below to open our scheduling calendar in a new window.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={openCalendly}
              className="flex-1 btn-primary"
            >
              Open Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
