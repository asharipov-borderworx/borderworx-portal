import Link from 'next/link'
import { getContactInfo } from '@/utils/contactInfo'

export default function Footer() {
  const contactInfo = getContactInfo()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Company Passion', href: '/company-passion' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/quote' },
  ]

  const services = [
    { name: 'Warehousing', href: '/services/warehousing' },
    { name: 'Warehousing & Distribution', href: '/services/warehousing-distribution' },
    { name: 'Customs Brokerage', href: '/services/customs-brokerage' },
    { name: 'Trade Compliance', href: '/services/trade-compliance' },
    { name: 'Amazon FBM', href: '/services/amazon-fbm' },
    { name: 'FBA Prep Center', href: '/services/amazon-fba-prep' },
    { name: 'CFS Shipping', href: '/services/cfs-shipping' },
  ]

  const resources = [
    { name: 'What is FTZ?', href: '/resources/foreign-trade-zone-ftz-information' },
    { name: 'What is CES?', href: '/resources/centralized-examination-station-ces-information' },
    { name: 'What is CFS?', href: '/resources/container-freight-station-cfs-information' },
    { name: 'What is CTPAT?', href: '/resources/ctpat-certification-information' },
    { name: 'UPS Tracking', href: '/resources/ups-shipment-tracking' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: contactInfo.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-primary">Border</span>Worx
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {contactInfo.company.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone Numbers */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary mb-4 text-center md:text-left">Phone Numbers</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-center md:text-left">
                    <div className="text-gray-300 font-medium">{contactInfo.contact.address.Canada.phone}</div>
                    <div className="text-gray-400 text-sm">Canada</div>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-center md:text-left">
                    <div className="text-gray-300 font-medium">{contactInfo.contact.address.USA.phone}</div>
                    <div className="text-gray-400 text-sm">USA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary mb-4 text-center md:text-left">Email Addresses</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-center md:text-left">
                    <div className="text-gray-300 font-medium">{contactInfo.contact.email.primary}</div>
                    <div className="text-gray-400 text-sm">General Inquiries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {contactInfo.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
