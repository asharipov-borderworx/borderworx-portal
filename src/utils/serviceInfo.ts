import serviceData from '@/data/serviceInfo.json'
import { Service } from '@/types/service'

export default function getServiceInfo() {
    return serviceData as Service[] 
}