import Link from "next/link";

export default function HeroSection({ title, description, breadcrumb }: { title: string, description: string, breadcrumb: string }) {
    return (
        <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white pt-40 sm:pt-44 md:pt-44 lg:pt-44 xl:pt-48 overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-orange-100 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> /{' '}
              <Link href="/services" className="hover:text-white transition-colors">Services</Link> /{' '}
              <span className="text-white font-medium">{breadcrumb}</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>
    )
}