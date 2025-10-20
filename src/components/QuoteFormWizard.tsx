"use client"

import { useMemo, useState } from 'react'
import StepOne from './quoteSteps/StepOne'
import StepTwo from './quoteSteps/StepTwo'
import StepThree from './quoteSteps/StepThree'
import StepFour from './quoteSteps/StepFour'

type FreightData = {
  freightOrigin?: string;
  freightDestination?: string;
  weight: string;
  commodity: string;
};

type CustomsBrokerageData = {
  shippingOrigin: string;
  shippingDestination: string;
  productType: string;
  oneTimeShipment: boolean;
  dateNeeded: string;
  shippingType: "Air" | "Ocean" | "Road" | "Rail" | "Not Sure";
};

type WarehousingData = {
  warehouseLocationPreference: string;
  squareFeetNeeded: string;
  productType: string;
  storedValue: "Bulk" | "Drums" | "Boxes" | "Rolls" | "Other";
  anticipatedContractLength: string;
  anticipatedMonthlyInventoryTurns: string;
  transportServiceNeeded: "Yes" | "No" | "Not Sure";
  copackingServicesNeeded: "Yes" | "No" | "Not Sure";
};
type TradeCompliance =
  "Tariff Classification"
  | "Rulings"
  | "USMCA/CUSM"
  | "Free Trade Agreements"
  | "Compliance review"
  | "Custom Audit Assistance"
  | "Voluntary Disclosures"
  | "Valuation"
  | "Certification of Origin Solicitation"
  | "Refunds/Drawbacks"
  | "Others";

type TradeComplianceData = {
  productType: string;
  industryType: string;
  tradingActivity: "Import" | "Export" | "Both" | "Other";
  helpNeededType: TradeCompliance[];
}

type BaseContact = {
  name: string
  email: string
  phone: string
  company: string
  jobTitle?: string
  websiteUrl?: string
  message?: string
}
export type QuoteWizardState =
  | (BaseContact & { service: "Freight Shipping"; payload: FreightData })
  | (BaseContact & { service: "Warehousing"; payload: WarehousingData })
  | (BaseContact & { service: "Customs Brokerage – Canada & USA"; payload: {} })
  | (BaseContact & { service: "Trade Compliance Consulting"; payload: {} })
  | (BaseContact & { service: "Other"; payload: {} });
// export type QuoteWizardState = {
//   // Step 1: Contact
//   name: string
//   email: string
//   phone: string
//   company: string
//   jobTitle: string
//   websiteUrl: string
//   // Step 2: Service
//   service: string
//   // Step 3: Shipment details
//   freightOrigin: string
//   freightDestination: string
//   // Step 4: Notes
//   timeline: string
//   specialHandling: string
//   notes: string
// }

const initialState: QuoteWizardState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  websiteUrl: '',
  service: 'Other',
  payload: {}
}
const freightInitialState: FreightData = {
  freightOrigin: '',
  freightDestination: '',
  weight: '',
  commodity: ''
};
const warehousingInitialState: WarehousingData = {
  warehouseLocationPreference: '',
  squareFeetNeeded: '',
  productType: '',
  storedValue: 'Bulk',
  anticipatedContractLength: '',
  anticipatedMonthlyInventoryTurns: '',
  transportServiceNeeded: 'Not Sure',
  copackingServicesNeeded: 'Not Sure'
};

const customsBrokerageInitialState: CustomsBrokerageData = {
  shippingOrigin: '',
  shippingDestination: '',
  productType: '',
  oneTimeShipment: false,
  dateNeeded: '',
  shippingType: 'Not Sure'
};

const tradeComplianceInitialState: TradeComplianceData = {
  productType: '',
  industryType: '',
  tradingActivity: 'Export',
  helpNeededType: []
};


export default function QuoteFormWizard() {
  const [form, setForm] = useState<QuoteWizardState>(initialState)
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const totalSteps = 5
  const progress = useMemo(() => Math.round((step / totalSteps) * 100), [step])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    
    // Check if this is a payload field (Step 3 fields)
    const payloadFields = [
      'freightOrigin', 'freightDestination', 'weight', 'commodity',
      'warehouseLocationPreference', 'squareFeetNeeded', 'productType', 'storedValue',
      'anticipatedContractLength', 'anticipatedMonthlyInventoryTurns', 'transportServiceNeeded', 'copackingServicesNeeded',
      'shippingOrigin', 'shippingDestination', 'dateNeeded', 'shippingType', 'oneTimeShipment',
      'industryType', 'tradingActivity', 'helpNeededType'
    ]
    
    if (payloadFields.includes(name)) {
      setForm((prev) => ({
        ...prev,
        payload: {
          ...(prev as any).payload,
          [name]: value
        }
      } as any))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  function validateCurrentStep(): { hasErrors: boolean; fieldErrors: Record<string, string> } {
    const errors: Record<string, string> = {}
    
    if (step === 1) {
      if (!form.name.trim()) errors.name = 'Name is required'
      if (!form.email.trim()) errors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address'
      if (!form.company.trim()) errors.company = 'Company is required'
      
      // Optional field validations
      if (form.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(form.phone.replace(/[\s\-\(\)]/g, ''))) {
        errors.phone = 'Please enter a valid phone number'
      }
      if (form.websiteUrl && !/^https?:\/\/.+/.test(form.websiteUrl)) {
        errors.websiteUrl = 'Please enter a valid URL (starting with http:// or https://)'
      }
    }
    
    if (step === 2) {
      if (!form.service.trim()) errors.service = 'Please select a service'
    }
    
    if (step === 3) {
      const payload = (form as any).payload || {}
      
      if (form.service === 'Freight Shipping') {
        if (!payload.weight?.trim()) errors.weight = 'Weight is required'
        if (!payload.commodity?.trim()) errors.commodity = 'Commodity is required'
      }
      
      if (form.service === 'Warehousing') {
        if (!payload.warehouseLocationPreference?.trim()) errors.warehouseLocationPreference = 'Warehouse location is required'
        if (!payload.squareFeetNeeded?.trim()) errors.squareFeetNeeded = 'Square feet needed is required'
        if (!payload.productType?.trim()) errors.productType = 'Product type is required'
        if (!payload.anticipatedContractLength?.trim()) errors.anticipatedContractLength = 'Contract length is required'
        if (!payload.anticipatedMonthlyInventoryTurns?.trim()) errors.anticipatedMonthlyInventoryTurns = 'Monthly inventory turns is required'
      }
      
      if (form.service === 'Customs Brokerage – Canada & USA') {
        if (!payload.shippingOrigin?.trim()) errors.shippingOrigin = 'Shipping origin is required'
        if (!payload.shippingDestination?.trim()) errors.shippingDestination = 'Shipping destination is required'
        if (!payload.productType?.trim()) errors.productType = 'Product type is required'
        if (!payload.dateNeeded?.trim()) {
          errors.dateNeeded = 'Date needed is required'
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(payload.dateNeeded)) {
          errors.dateNeeded = 'Use format YYYY-MM-DD'
        }
      }
      
      if (form.service === 'Trade Compliance Consulting') {
        if (!payload.productType?.trim()) errors.productType = 'Product type is required'
        if (!payload.industryType?.trim()) errors.industryType = 'Industry type is required'
        if (!payload.tradingActivity?.trim()) errors.tradingActivity = 'Trading activity is required'
        if (!payload.helpNeededType?.length) errors.helpNeededType = 'Please select at least one help needed type'
      }
    }
    
    return { hasErrors: Object.keys(errors).length > 0, fieldErrors: errors }
  }

  function nextStep(e?: React.MouseEvent) {
    e?.preventDefault()
    e?.stopPropagation()
    
    const validation = validateCurrentStep()
    if (validation.hasErrors) {
      setFieldErrors(validation.fieldErrors)
      setError('Please fix the errors below before continuing.')
      return
    }
    
    setFieldErrors({})
    setError(null)
    
    if(step === 2) {
      if(form.service === 'Freight Shipping') {
        setForm({...form, payload: freightInitialState});
      }
      else if(form.service === 'Warehousing') {
        setForm({...form, payload: warehousingInitialState});
      }
      else if(form.service === 'Customs Brokerage – Canada & USA') {
        setForm({...form, payload: customsBrokerageInitialState});
      }
      else if(form.service === 'Trade Compliance Consulting') {
        setForm({...form, payload: tradeComplianceInitialState});
      }
    }
    setSubmitting(false) // Ensure submitting is false
    setStep((s) => Math.min(4, s + 1)) // Don't go beyond step 4
  }

  function prevStep() {
    setError(null)
    setStep((s) => Math.max(1, s - 1))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    // Only allow submission on step 4
    if (step !== 4) {
      return
    }
    
    const validation = validateCurrentStep()
    if (validation.hasErrors) {
      setFieldErrors(validation.fieldErrors)
      setError('Please fix the errors below before submitting.')
      return
    }
    
    setFieldErrors({})
    setError(null)
    setSubmitting(true)

    // Prepare the complete form data
    const formData = {
      // Base contact information
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      jobTitle: form.jobTitle,
      websiteUrl: form.websiteUrl,
      message: (form as any).message,
      
      // Service information
      service: form.service,
      
      // Service-specific payload
      payload: (form as any).payload || {},
      
      // Optional subject override
      subject: `Quote Request: ${form.service || 'Logistics Services'}${form.company ? ` - ${form.company}` : ''}`
    }

    try {
      const response = await fetch('/api/sendQuote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (!data.success) {
        setError(data.message || 'Failed to send your quote request.')
      } else {
        setError(null)
        setSubmitted(true)
        setForm(initialState)
        setStep(1)
      }
    } catch (err) {
      console.error('Quote submission error:', err)
      setError('Network error. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
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

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Step {step} of {totalSteps}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* <VisibleFields step={step} form={form} onChange={handleChange} /> */}
        {step === 1 && (
          <StepOne form={form} handleChange={handleChange} fieldErrors={fieldErrors} />
        )}

        {step === 2 && (
          <StepTwo form={form} handleChange={handleChange} fieldErrors={fieldErrors} />
        )}

        {step === 3 && (
          <StepThree form={form} handleChange={handleChange} fieldErrors={fieldErrors} />
        )}
        {step === 4 && (
          <StepFour form={form} handleChange={handleChange} fieldErrors={fieldErrors} />
        )}


        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={prevStep}
            className={`px-5 py-2.5 rounded-lg font-semibold border border-gray-200 text-secondary hover:bg-gray-50 transition ${step === 1 ? 'invisible' : ''}`}
          >
            Back
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-orange-600 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:-translate-y-0.5"
            >
              Next
            </button>
          ) : (
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
          )}
        </div>
      </form>
    </div>
  )
}


