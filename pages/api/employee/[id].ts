import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { URLS } from '../../../common/constants/urls'
import { Employee } from '../../../common/types'
import { mockedCities } from '../employees'

const getEmployees = async (
  req: NextApiRequest,
  res: NextApiResponse<Employee | undefined>
) => {
  const id = parseInt(req.query.id.toString(), 10)
  const { data } = await axios.get<Employee[]>(URLS.EMPLOYEES)
  const mocked = mockedCities(data)
  const result = mocked.find(employee => id === employee.id)

  // mock

  res.status(200).json(result)
}

export default getEmployees
