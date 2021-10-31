import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import { FC } from 'react'
import LinkIcon from './LinkIcon'

export type PhoneIconProps = {
  phone: string
}

const PhoneIcon: FC<PhoneIconProps> = ({ phone }) => {
  return <LinkIcon href={phone} type="tel" icon={faMobileAlt} />
}

export default PhoneIcon
