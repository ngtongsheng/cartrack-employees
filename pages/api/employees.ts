import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { URLS } from '../../common/constants/urls'
import { Employee } from '../../common/types'

const getEmployees = async (
  req: NextApiRequest,
  res: NextApiResponse<Employee[]>
) => {
  const { data } = await axios.get<Employee[]>(URLS.EMPLOYEES)

  res.status(200).json(data)
}

export default getEmployees
