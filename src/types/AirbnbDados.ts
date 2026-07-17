export interface AirBnbApi {
    accomodation: Accomodation[]
    icons: Photo[]
}

export interface Accomodation {
    number: number
    date: string
    host: string
    id: string
    title: string
    slug: string
    location: Location
    hasBadge: boolean
    price: number
    rating: number
    testimonials: Testimonials[]
    photos: Photo[]
}

export interface Location {
    description: string
    city: string
    state: string
    country: string
}

export interface Testimonials {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Photo {
    id: string
    source: string
    description: string
    url: string
}
