import { faAt } from '@fortawesome/free-solid-svg-icons'

import { FC } from 'react'
import LinkIcon from './LinkIcon'

export type EmailIconProps = {
  email: string
}

const EmailIcon: FC<EmailIconProps> = ({ email }) => {
  return <LinkIcon href={email} type="mailto" icon={faAt} />
}

export default EmailIcon
