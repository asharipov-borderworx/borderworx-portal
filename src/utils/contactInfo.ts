import { ContactInfo } from '@/types/contact'
import contactData from '@/data/contactInfo.json'

export const getContactInfo = (): ContactInfo => {
  return contactData as ContactInfo
}


export const getPrimaryEmail = (): string => {
  return contactData.contact.email.primary
}

export const getCompanyName = (): string => {
  return contactData.company.name
}
