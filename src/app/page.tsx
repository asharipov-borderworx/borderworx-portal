import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProfessionalServices from '@/components/ProfessionalServices'
import Services from '@/components/Services'
import IntegrationPartners from '@/components/IntegrationPartners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProfessionalServices />
      <Services />
      <IntegrationPartners />
      <Footer />
      <Chatbot />
    </main>
  )
}
