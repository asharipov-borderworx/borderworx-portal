import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProfessionalServices from '@/components/ProfessionalServices'
import Services from '@/components/Services'
import IntegrationPartners from '@/components/IntegrationPartners'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProfessionalServices />
      <Services />
      <IntegrationPartners />
    </main>
  )
}
