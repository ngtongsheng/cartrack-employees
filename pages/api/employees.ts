import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { URLS } from '../../common/constants/urls'
import {
  Employee,
  EmployeeSearchResponse,
  EmployeeSearchParams
} from '../../common/types'

const uniqValues = <T>(array: T[]): T[] => [...Array.from(new Set(array))]

// mock
export const mockedCities = (data: Employee[]) =>
  data.map((employee, index) => {
    return {
      ...employee,
      email: employee.email.toLowerCase(),
      address: {
        ...employee.address,
        city: data[index % 3].address.city
      }
    }
  })

const getEmployees = async (
  req: NextApiRequest,
  res: NextApiResponse<EmployeeSearchResponse>
) => {
  const { search = '', city = '' } = req.body as EmployeeSearchParams
  const { data } = await axios.get<Employee[]>(URLS.EMPLOYEES)

  // mock
  const mocked = mockedCities(data)

  const cities = mocked.map(({ address }) => address.city)
  const uniqueCities = uniqValues(cities)
  const regex = new RegExp(search, 'ig')

  const filtered = (mocked || []).filter(({ name, email, address }) => {
    return (
      (!search || regex.test(name) || regex.test(email)) &&
      (!city || address.city === city)
    )
  })

  res.status(200).json({
    employees: filtered,
    aggregations: {
      cities: uniqueCities
    }
  })
}

export default getEmployees
