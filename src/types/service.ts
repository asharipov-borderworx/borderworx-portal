export type Feature = string | {
  text: string
  image: string
}

export interface Service {
    id: string
    title: string
    description: string
    features: Feature[]
    imageUrl: string
    imageAlt: string
    detailsLink: string
  }