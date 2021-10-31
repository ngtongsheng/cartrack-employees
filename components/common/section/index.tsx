import { FC } from 'react'
import { STYLES } from '../../../common/constants/styles'

const Section: FC = ({ children }) => {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          padding: ${STYLES.GAP};
        }
      `}</style>
    </>
  )
}

export default Section
