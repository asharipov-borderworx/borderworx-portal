export interface ContactInfo {
  company: {
    name: string
    tagline: string
    description: string
  }
  contact: {
    email: {
      primary: string
    }
    address: {
      USA: AddressEntry
      Canada: AddressEntry
    }
  }
  businessHours: {
    weekdays: string
    hours: string
    timezone: string
    support: string
  }
  social: {
    linkedin: string
  }
  emergency: {
    phone: string
    email: string
    description: string
  }
  calendly: {
    url: string
    prefill: {
      email: string
      firstName: string
      lastName: string
      name: string
    }
  }
}

export interface AddressEntry {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  full: string
  phone?: string
  fax?: string
  email?: string
}
