import { FC } from 'react'

const Card: FC = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
      <style jsx>{`
        .card {
          border-radius: 0.5rem;
          padding: 1.5rem;
          background-color: whitesmoke;
          filter: drop-shadow(0 0 0.75rem crimson);
        }
      `}</style>
    </>
  )
}

export default Card
