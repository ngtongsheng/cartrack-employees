import { FC } from 'react'

const Section: FC = ({ children }) => {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          padding: calc(var(--default-gap) / 2);
        }
      `}</style>
    </>
  )
}

export default Section
