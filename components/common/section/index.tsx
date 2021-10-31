import { FC } from 'react'

const Section: FC = ({ children }) => {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          padding: 1rem;
        }
      `}</style>
    </>
  )
}

export default Section
