// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export type Employee = {
  id: string
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

const getEmployees = async (
  req: NextApiRequest,
  res: NextApiResponse<Employee[]>
) => {
  const { data } = await axios.get<Employee[]>(
    'https://jsonplaceholder.typicode.com/users'
  )

  res.status(200).json(data)
}

export default getEmployees
