import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import { FC } from 'react'
import Icon from '.'

export type EmailIconProps = {
  phone: string
}

const EmailIcon: FC<EmailIconProps> = ({ phone }) => {
  return (
    <a href={`tel:${phone}`}>
      <Icon icon={faMobileAlt} />
    </a>
  )
}

export default EmailIcon
