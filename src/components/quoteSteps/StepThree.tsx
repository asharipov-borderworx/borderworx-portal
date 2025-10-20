import { QuoteWizardState } from "../QuoteFormWizard";
import { useRef } from 'react'

export default function StepThree({ 
  form, 
  handleChange, 
  fieldErrors 
}: { 
  form: QuoteWizardState, 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  fieldErrors: Record<string, string>
}) {
    const dateInputRef = useRef<HTMLInputElement>(null)

    // Helper function to get validation classes
    const getValidationClasses = (fieldName: string) => {
        return `w-full px-4 py-3 rounded-lg border bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
            fieldErrors[fieldName] 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200'
        }`
    }

    // Ensure YYYY-MM-DD mask as user types
    const handleMaskedDateChange = (raw: string) => {
        const digits = raw.replace(/\D/g, '').slice(0, 8)
        const year = digits.slice(0, 4)
        const month = digits.slice(4, 6)
        const day = digits.slice(6, 8)
        let formatted = year
        if (digits.length > 4) formatted += `-${month}`
        if (digits.length > 6) formatted += `-${day}`
        handleChange({ target: { name: 'dateNeeded', value: formatted } } as any)
    }

    return (
        <div className="space-y-5">
            {form.service === 'Freight Shipping' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="block text-sm font-medium text-secondary mb-2">Freight Origin (optional)</label>
                            <input
                                type="text"
                                name="freightOrigin"
                                value={form.payload.freightOrigin}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="Describe your goods"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-secondary mb-2">Freight Destination (optional)</label>
                            <input
                                type="text"
                                name="freightDestination"
                                value={form.payload.freightDestination}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="Describe your goods"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="block text-sm font-medium text-secondary mb-2">Weight*</label>
                            <input
                                type="text"
                                name="weight"
                                value={form.payload.weight}
                                onChange={handleChange}
                                className={getValidationClasses('weight')}
                                placeholder="e.g., 1000 lbs"
                            />
                            {fieldErrors.weight && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.weight}</p>
                            )}
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-secondary mb-2">Commodity*</label>
                            <input
                                type="text"
                                name="commodity"
                                value={form.payload.commodity}
                                onChange={handleChange}
                                className={getValidationClasses('commodity')}
                                placeholder="e.g., Electronics, Clothing"
                            />
                            {fieldErrors.commodity && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.commodity}</p>
                            )}
                        </div>
                    </div>

                </>
            )}
            {form.service === 'Warehousing' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="block text-sm font-medium text-secondary mb-2">Ideal Warehouse Location*</label>
                            <input
                                type="text"
                                name="warehouseLocationPreference"
                                value={form.payload.warehouseLocationPreference}
                                onChange={handleChange}
                                className={getValidationClasses('warehouseLocationPreference')}
                                placeholder="e.g., Toronto, Buffalo, Niagara Falls"
                            />
                            {fieldErrors.warehouseLocationPreference && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.warehouseLocationPreference}</p>
                            )}
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-secondary mb-2">Square Feet Needed*</label>
                            <input
                                type="text"
                                name="squareFeetNeeded"
                                value={form.payload.squareFeetNeeded}
                                onChange={handleChange}
                                className={getValidationClasses('squareFeetNeeded')}
                                placeholder="e.g., 5000 sq ft"
                            />
                            {fieldErrors.squareFeetNeeded && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.squareFeetNeeded}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">What type of product do you have*</label>
                            <input
                                type="text"
                                name="productType"
                                value={form.payload.productType}
                                onChange={handleChange}
                                className={getValidationClasses('productType')}
                                placeholder="e.g., Electronics, Apparel, Food"
                            />
                            {fieldErrors.productType && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.productType}</p>
                            )}
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">How is your product stored*</label>
                            <div className="relative">
                                <select
                                    name="storedValue"
                                    value={form.payload.storedValue}
                                    onChange={handleChange}
                                    className="w-full px-4 pr-12 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none shadow-sm"
                                >
                                    <option value="Bulk">Bulk</option>
                                    <option value="Drums">Drums</option>
                                    <option value="Boxes">Boxes</option>
                                    <option value="Rolls">Rolls</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Anticipated Contract Length*</label>
                            <input
                                type="text"
                                name="anticipatedContractLength"
                                value={form.payload.anticipatedContractLength}
                                onChange={handleChange}
                                className={getValidationClasses('anticipatedContractLength')}
                                placeholder="e.g., 12 months, 2 years"
                            />
                            {fieldErrors.anticipatedContractLength && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.anticipatedContractLength}</p>
                            )}
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Anticipated Monthly Inventory Turns*</label>
                            <input
                                type="text"
                                name="anticipatedMonthlyInventoryTurns"
                                value={form.payload.anticipatedMonthlyInventoryTurns}
                                onChange={handleChange}
                                className={getValidationClasses('anticipatedMonthlyInventoryTurns')}
                                placeholder="e.g., 2-3 turns per month"
                            />
                            {fieldErrors.anticipatedMonthlyInventoryTurns && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.anticipatedMonthlyInventoryTurns}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Are Transport Service Needed*</label>
                            <div className="relative">
                                <select
                                    name="transportServiceNeeded"
                                    value={form.payload.transportServiceNeeded}
                                    onChange={handleChange}
                                    className="w-full px-4 pr-12 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none shadow-sm"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not Sure">Not Sure</option>
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Are Co-packing Services Needed*</label>
                            <div className="relative">
                                <select
                                    name="copackingServicesNeeded"
                                    value={form.payload.copackingServicesNeeded}
                                    onChange={handleChange}
                                    className="w-full px-4 pr-12 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none shadow-sm"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Not Sure">Not Sure</option>
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                </div>
                </>
            )}
            {form.service === 'Customs Brokerage – Canada & USA' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Shipping Origin*</label>
                            <input
                                type="text"
                                name="shippingOrigin"
                                value={(form.payload as any).shippingOrigin || ''}
                                onChange={handleChange}
                                className={getValidationClasses('shippingOrigin')}
                                placeholder="e.g., Toronto, Canada"
                            />
                            {fieldErrors.shippingOrigin && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.shippingOrigin}</p>
                            )}
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Shipping Destination*</label>
                            <input
                                type="text"
                                name="shippingDestination"
                                value={(form.payload as any).shippingDestination || ''}
                                onChange={handleChange}
                                className={getValidationClasses('shippingDestination')}
                                placeholder="e.g., Buffalo, USA"
                            />
                            {fieldErrors.shippingDestination && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.shippingDestination}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Product Type*</label>
                            <input
                                type="text"
                                name="productType"
                                value={(form.payload as any).productType || ''}
                                onChange={handleChange}
                                className={getValidationClasses('productType')}
                                placeholder="e.g., Electronics, Machinery"
                            />
                            {fieldErrors.productType && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.productType}</p>
                            )}
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Date Needed*</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="dateNeeded"
                                    value={(form.payload as any).dateNeeded || ''}
                                    onChange={(e) => handleMaskedDateChange(e.target.value)}
                                    inputMode="numeric"
                                    placeholder="yyyy-mm-dd"
                                    className={getValidationClasses('dateNeeded')}
                                    title="Use format YYYY-MM-DD or pick from calendar"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        const el = dateInputRef.current
                                        if (!el) return
                                        // Try modern picker
                                        // @ts-ignore
                                        if (typeof el.showPicker === 'function') {
                                            // @ts-ignore
                                            el.showPicker()
                                        } else {
                                            el.focus()
                                            el.click()
                                        }
                                    }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition"
                                    aria-label="Open calendar"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                {/* Hidden native date input to get a real calendar */}
                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    className="sr-only"
                                    value={(form.payload as any).dateNeeded || ''}
                                    onChange={(e) => handleMaskedDateChange(e.target.value)}
                                />
                            </div>
                            {fieldErrors.dateNeeded && (
                                <p className="mt-1 text-sm text-red-600">{fieldErrors.dateNeeded}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Shipping Type*</label>
                            <div className="relative">
                                <select
                                    name="shippingType"
                                    value={(form.payload as any).shippingType || 'Not Sure'}
                                    onChange={handleChange}
                                    className="w-full px-4 pr-12 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none shadow-sm"
                                >
                                    <option value="Air">Air</option>
                                    <option value="Ocean">Ocean</option>
                                    <option value="Road">Road</option>
                                    <option value="Rail">Rail</option>
                                    <option value="Not Sure">Not Sure</option>
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">One Time Shipment*</label>
                            <div className="relative">
                                <select
                                    name="oneTimeShipment"
                                    value={(form.payload as any).oneTimeShipment ? 'true' : 'false'}
                                    onChange={(e) => handleChange({
                                        target: { name: 'oneTimeShipment', value: e.target.value === 'true' }
                                    } as any)}
                                    className="w-full px-4 pr-12 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none shadow-sm"
                                >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.168l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                </div>
                </>
            )}
            {form.service === 'Trade Compliance Consulting' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Product Type*</label>
                            <input
                                type="text"
                                name="productType"
                                value={(form.payload as any).productType || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="e.g., Electronics, Textiles, Food"
                            />
                        </div>
                        <div className="group">
                            <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Industry Type*</label>
                            <input
                                type="text"
                                name="industryType"
                                value={(form.payload as any).industryType || ''}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="e.g., Manufacturing, Retail, Technology"
                            />
                        </div>
                    </div>
                    <div className="group">
                        <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">Trading Activity*</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {['Import','Export','Both','Other'].map((option) => {
                                const checked = ((form.payload as any).tradingActivity || 'Export') === option
                                return (
                                    <label key={option} className={`flex items-center justify-center px-3 py-2 rounded-lg border text-sm font-medium cursor-pointer select-none transition ${checked ? 'border-primary text-white bg-primary shadow-sm' : 'border-gray-200 text-secondary bg-white hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="tradingActivity"
                                            value={option}
                                            checked={checked}
                                            onChange={handleChange}
                                            className="sr-only"
                                        />
                                        {option}
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className="group">
                        <label className="flex text-sm font-medium text-secondary mb-2 min-h-[2.5rem] items-start">What do you need help with? (Select all that apply)*</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                            {[
                                "Tariff Classification",
                                "Rulings",
                                "USMCA/CUSM",
                                "Free Trade Agreements",
                                "Compliance review",
                                "Custom Audit Assistance",
                                "Voluntary Disclosures",
                                "Valuation",
                                "Certification of Origin Solicitation",
                                "Refunds/Drawbacks",
                                "Others"
                            ].map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="helpNeededType"
                                        value={option}
                                        checked={(form.payload as any).helpNeededType?.includes(option as any) || false}
                                        onChange={(e) => {
                                            const currentValues = (form.payload as any).helpNeededType || [];
                                            const newValues = e.target.checked
                                                ? [...currentValues, option]
                                                : currentValues.filter((v: any) => v !== option);
                                            handleChange({
                                                target: { name: 'helpNeededType', value: newValues }
                                            } as any);
                                        }}
                                        className="rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                </div>
                </>
            )}
        </div>

        // <div className="space-y-5">
        //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        //       <div className="group">
        //         <label className="block text-sm font-medium text-secondary mb-2">Commodity*</label>
        //         <input
        //           type="text"
        //           name="commodity"
        //           value={form.commodity}
        //           onChange={handleChange}
        //           className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        //           placeholder="Describe your goods"
        //         />
        //       </div>
        //       <div className="group">
        //         <label className="block text-sm font-medium text-secondary mb-2">Units (kg, lb, cbm, etc.)</label>
        //         <input
        //           type="text"
        //           name="units"
        //           value={form.units}
        //           onChange={handleChange}
        //           className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        //           placeholder="kg, lb, cbm, etc."
        //         />
        //       </div>
        //     </div>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        //       <div className="group">
        //         <label className="block text-sm font-medium text-secondary mb-2">Weight</label>
        //         <input
        //           type="text"
        //           name="weight"
        //           value={form.weight}
        //           onChange={handleChange}
        //           className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        //           placeholder="e.g., 500 kg"
        //         />
        //       </div>
        //       <div className="group">
        //         <label className="block text-sm font-medium text-secondary mb-2">Volume</label>
        //         <input
        //           type="text"
        //           name="volume"
        //           value={form.volume}
        //           onChange={handleChange}
        //           className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        //           placeholder="e.g., 2.5 cbm"
        //         />
        //       </div>
        //     </div>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        //       <div className="group">
        //         <label className="block text-sm font-medium text-secondary mb-2">Pallets</label>
        //         <input
        //           type="text"
        //           name="pallets"
        //           value={form.pallets}
        //           onChange={handleChange}
        //           className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        //           placeholder="# of pallets"
        //         />
        //       </div>
        //       <div className="group">
        //         <label className="block text-sm font-medium text-secondary mb-2">Hazardous</label>
        //         <select
        //           name="hazardous"
        //           value={form.hazardous}
        //           onChange={handleChange}
        //           className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        //         >
        //           <option value="">Select</option>
        //           <option>No</option>
        //           <option>Yes</option>
        //         </select>
        //       </div>
        //     </div>
        //   </div>
    )
}