import { Metadata } from 'next'
import Chatbot from '@/components/Chatbot'
import getServiceInfo from '@/utils/serviceInfo'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Logistics Services | BorderWorx - Comprehensive Supply Chain Solutions',
  description: 'Comprehensive logistics services including warehousing, customs brokerage, FBA prep, container freight, and fulfillment solutions for Canada and USA.',
  keywords: 'warehousing, distribution, customs brokerage, trade compliance, FBA, Amazon fulfillment, container freight, logistics services',
}

export default function ServicesPage() {
  const services = getServiceInfo()
  return (
    <div className="min-h-screen">
      <ServicesPageClient services={services} />
      <Chatbot />
    </div>
  )
}
