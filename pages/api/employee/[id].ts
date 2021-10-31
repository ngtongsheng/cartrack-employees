import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { URLS } from '../../../common/constants/urls'
import { Employee } from '../../../common/types'

const getEmployees = async (
  req: NextApiRequest,
  res: NextApiResponse<Employee | undefined>
) => {
  const id = parseInt(req.query.id.toString(), 10)
  const { data } = await axios.get<Employee[]>(URLS.EMPLOYEES)
  const result = data.find(employee => id === employee.id)

  res.status(200).json(result)
}

export default getEmployees
