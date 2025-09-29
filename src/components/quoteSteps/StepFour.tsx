import { QuoteWizardState } from "../QuoteFormWizard";

export default function StepFour({ form, handleChange }: { form: QuoteWizardState, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void }) {
    return (
        <div className="grid grid-cols-1 gap-5">
            <div className="group">
                <label className="block text-sm font-medium text-secondary mb-2">What else do you want to share?</label>
                <textarea
                    name="message"
                    value={(form as any).message || ''}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Please provide any additional details about your logistics needs..."
                />
            </div>
        </div>
    )
}