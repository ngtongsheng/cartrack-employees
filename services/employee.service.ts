import axios from 'axios'
import {
  Employee,
  EmployeeSearchParams,
  EmployeeSearchResponse
} from '../common/types'

export const getEmployee = async (
  id: string
): Promise<Employee | undefined> => {
  try {
    const { data } = await axios.get<Employee>(`/api/employee/${id}`)

    return data
  } catch (error) {
    return undefined
  }
}

export const getEmployees = async ({
  search = '',
  city = ''
}: EmployeeSearchParams): Promise<EmployeeSearchResponse> => {
  try {
    const { data } = await axios.post<EmployeeSearchResponse>(
      '/api/employees',
      {
        search,
        city
      }
    )

    return data
  } catch (error) {
    return {
      employees: [],
      aggregations: {
        cities: []
      }
    }
  }
}
