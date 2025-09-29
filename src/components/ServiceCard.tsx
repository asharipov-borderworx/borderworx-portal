import { Service } from "@/types/service";
import Link from "next/link";
import ServiceImage from "./ServiceImage";

export default function ServiceCard({ service, index }: { service: Service, index: number} ) {
    return (
        <>
        
            <div 
            id={service.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
            {/* Service Image */}
            <ServiceImage
                imageUrl={service.imageUrl}
                imageAlt={service.imageAlt}
                serviceIndex={index}
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {service.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex-grow">
                <h4 className="font-semibold text-secondary mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-xs">{feature}</span>
                    </li>
                    ))}
                </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                <Link
                href={service.detailsLink}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm"
                >
                Learn More
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </Link>
                </div>
            </div>
            </div>
        </>
      
    )
}