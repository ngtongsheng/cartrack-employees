import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

export type IconProps = {
  icon: IconDefinition
}

const Icon: FC<IconProps> = ({ icon }) => {
  return (
    <span className="icon">
      <FontAwesomeIcon size="1x" icon={icon} />
      <style jsx>{`
        .icon :global(svg) {
          width: 1.5rem;
          height: 1.5rem;
          font-size: 1.5rem;
        }
      `}</style>
    </span>
  )
}

export default Icon
