import { FC } from 'react'

const Section: FC = ({ children }) => {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          padding: var(--default-gap);
        }
      `}</style>
    </>
  )
}

export default Section
