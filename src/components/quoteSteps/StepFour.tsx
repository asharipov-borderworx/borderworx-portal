import { QuoteWizardState } from "../QuoteFormWizard";

export default function StepFour({ 
  form, 
  handleChange, 
  fieldErrors 
}: { 
  form: QuoteWizardState, 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  fieldErrors: Record<string, string>
}) {
    return (
        <div className="grid grid-cols-1 gap-5">
            <div className="group">
                <label className="block text-sm font-medium text-secondary mb-2">What else do you want to share?</label>
                <textarea
                    name="message"
                    value={(form as any).message || ''}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                      fieldErrors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-200'
                    }`}
                    placeholder="Please provide any additional details about your logistics needs..."
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
                )}
            </div>
        </div>
    )
}