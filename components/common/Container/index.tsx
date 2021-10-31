import { FC } from 'react'

const Container: FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          max-width: 1024px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

export default Container
