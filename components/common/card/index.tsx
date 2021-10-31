import { FC } from 'react'

const Card: FC = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
      <style jsx>{`
        .card {
          border-radius: var(--default-border-radius);
          padding: var(--default-gap);
          background-color: var(--color-white);
          box-shadow: 0 2px 8px -5px rgba(22, 22, 22, 0.15);
        }
      `}</style>
    </>
  )
}

export default Card
