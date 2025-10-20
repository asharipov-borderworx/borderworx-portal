import { QuoteWizardState } from "../QuoteFormWizard";

export default function StepOne({ 
  form, 
  handleChange, 
  fieldErrors 
}: { 
  form: QuoteWizardState, 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  fieldErrors: Record<string, string>
}) {
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
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                          fieldErrors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200'
                        }`}
                        placeholder="Your full name"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                    )}
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2">Email*</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                          fieldErrors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200'
                        }`}
                        placeholder="you@example.com"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                    )}
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
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                          fieldErrors.phone 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200'
                        }`}
                        placeholder="+1 (555) 000-0000"
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>
                    )}
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2">Company*</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                          fieldErrors.company 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200'
                        }`}
                        placeholder="Your company name"
                    />
                    {fieldErrors.company && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.company}</p>
                    )}
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
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                          fieldErrors.jobTitle 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200'
                        }`}
                        placeholder="Your job title"
                    />
                    {fieldErrors.jobTitle && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.jobTitle}</p>
                    )}
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-secondary mb-2">Website URL (optional)</label>
                    <input
                        type="text"
                        name="websiteUrl"
                        value={form.websiteUrl}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                          fieldErrors.websiteUrl 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200'
                        }`}
                        placeholder="Your website url"
                    />
                    {fieldErrors.websiteUrl && (
                      <p className="mt-1 text-sm text-red-600">{fieldErrors.websiteUrl}</p>
                    )}
                </div>
            </div>
        </div>
    )
}