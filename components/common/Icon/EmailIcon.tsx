import { faAt } from '@fortawesome/free-solid-svg-icons'

import { FC } from 'react'
import Icon from '.'

export type EmailIconProps = {
  email: string
}

const EmailIcon: FC<EmailIconProps> = ({ email }) => {
  return (
    <a href={`mailto:${email}`}>
      <Icon icon={faAt} />
    </a>
  )
}

export default EmailIcon
