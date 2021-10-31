import { FC } from 'react'
import { COLORS } from '../../../common/constants/color'
import { STYLES } from '../../../common/constants/styles'

const Card: FC = ({ children }) => {
  return (
    <>
      <div className="card">{children}</div>
      <style jsx>{`
        .card {
          border-radius: ${STYLES.BORDER_RADIUS};
          padding: ${STYLES.GAP};
          background-color: ${COLORS.WHITE};
          box-shadow: 0 2px 12px -3px rgba(22, 22, 22, 0.25);
        }
      `}</style>
    </>
  )
}

export default Card
