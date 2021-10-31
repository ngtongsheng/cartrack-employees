import type { NextPage } from 'next'
import Head from 'next/head'
import Employees from '../components/employees'

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

      <Employees />
    </>
  )
}

export default Home
