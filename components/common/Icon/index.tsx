import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

export type IconProps = {
  icon: IconDefinition
}

const Icon: FC<IconProps> = ({ icon }) => {
  return (
    <span className="icon">
      <FontAwesomeIcon icon={icon} />
      <style jsx>{`
        .icon :global(svg) {
          font-size: 1.5em;
        }
      `}</style>
    </span>
  )
}

export default Icon
