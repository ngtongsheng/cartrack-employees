import axios from 'axios'
import { Employee } from '../common/types'

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

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const { data } = await axios.post<Employee[]>('/api/employees')

    return data
  } catch (error) {
    return []
  }
}
