import { resources } from '@/data/resources'
import ResourcesPageClient from './ResourcesPageClient'

export const metadata = {
  title: 'Resources - BorderWorx Logistics',
  description: 'Guides, checklists, and playbooks to help you ship smarter and stay compliant.'
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ResourcesPageClient resources={resources} />
    </div>
  )
}
