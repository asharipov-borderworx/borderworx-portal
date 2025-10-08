import { getContactInfo } from "@/utils/contactInfo";
import Image from "next/image";

export default function ContactInfoCard({ country }: { country: string }) {
  const info = getContactInfo();
  const address = (info as any)?.contact?.address?.[country as any] || {}
  const addressFull = address?.full || ''
  const phone = address?.phone || (info as any)?.contact?.phone?.display || ''
  const email = address?.email || (info as any)?.contact?.email?.primary || ''
  const fax = address?.fax || ''
  const contacts = [
    {
      label: 'Phone',
      value: phone,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    fax ? {
      label: 'Fax',
      value: fax,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3h8v4M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm0 0V9a2 2 0 012-2h12a2 2 0 012 2v4" />
        </svg>
      )
    } : null,
    {
      label: 'Email',
      value: email,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Address',
      value: addressFull,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]
  const countryClass = country === "Canada" ? "bg-gradient-to-br from-red-50 to-red-100" : "bg-gradient-to-br from-blue-50 to-blue-100"
  return (
    <div className={`relative p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 animate-[fadeIn_0.6s_ease-out]
    [@keyframes_fadeIn]{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} `}
    >
      {country === "Canada" && (
        <div className="absolute inset-0 opacity-20 rounded-xl">
          <Image
            src="/images/services/canadianFlag.png"
            alt="Canadian Flag Background"
            fill
            className="object-cover"
          />
        </div>
      )}
      {country === "USA" && (
        <div>

          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/services/usaFlag.png"
              alt="USA Flag Background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-secondary mb-6">Get in touch {country === "Canada" ? "(Canadian office)" : "(USA office)"}</h2>
      <div className="space-y-5">
        {contacts.filter(Boolean).map((c: any, i: number) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-orange-600 text-white flex items-center justify-center flex-shrink-0">
              {c.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{c.label}</p>
              <p className="text-secondary font-semibold break-words">{c.value}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Socials */}
      {info.social?.linkedin ? (
        <div className="mt-8">
          <a
            href={info.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-semibold transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Follow on LinkedIn
          </a>
        </div>
      ) : null}
    </div>
  )
}
