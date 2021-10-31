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

export type EmployeeSearchParams = {
  search: string
  city: string
}

export type EmployeeSearchAggregations = {
  aggregations: {
    cities: string[]
  }
}

export type EmployeeSearchResponse = EmployeeSearchAggregations & {
  employees: Employee[]
}
