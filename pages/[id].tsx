import type { NextPage } from 'next'
import Head from 'next/head'
import { EmployeeProvider } from '../components/Employee/context'
import Employee from '../components/Employee'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cartrack employee directory</title>
        <meta
          name="description"
          content="Cartrack employee directory take home test."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EmployeeProvider>
        <Employee />
      </EmployeeProvider>
    </>
  )
}

export default Home
