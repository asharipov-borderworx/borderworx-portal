import { QuoteWizardState } from "../QuoteFormWizard";

export default function StepOne({ form, handleChange }: { form: QuoteWizardState, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void }) {
    return (
        <div className="space-y-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className="block text-sm font-medium text-secondary mb-2">Company*</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Your company name"
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2">Job Title (optional)</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={form.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Your job title"
                    />
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2">Website URL (optional)</label>
                    <input
                        type="text"
                        name="websiteUrl"
                        value={form.websiteUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Your website url"
                    />
                </div>
            </div>
        </div>
    )

}