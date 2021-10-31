export type Employee = {
  id: number
  name: string
  email: string
  address: {
    city: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  company: {
    name: string
  }
}
