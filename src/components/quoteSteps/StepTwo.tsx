import { QuoteWizardState } from "../QuoteFormWizard";

export default function StepTwo({
  form, 
  handleChange, 
  fieldErrors 
}: {
  form: QuoteWizardState, 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  fieldErrors: Record<string, string>
}) {
    return (
        <div className="">
            <div className="group">
              <label className="block text-sm font-medium text-secondary mb-2">Service*</label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`w-full px-4 pr-12 py-3 rounded-lg border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none shadow-sm ${
                    fieldErrors.service 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-200'
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Warehousing">Warehousing</option>
                  <option value="Customs Brokerage – Canada & USA">Customs Brokerage – Canada & USA</option>
                  <option value="Trade Compliance Consulting">Trade Compliance Consulting</option>
                  <option value="Freight Shipping">Freight Shipping</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              {fieldErrors.service && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.service}</p>
              )}
            </div>
          </div>
    )
}