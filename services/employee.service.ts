import axios from 'axios'
import { Employee } from '../pages/api/getEmployees'

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const { data } = await axios.post<Employee[]>('/api/getEmployees')

    return data
  } catch (error) {
    return []
  }
}
