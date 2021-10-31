import { FC } from 'react'
import Icon, { IconProps } from '.'
import Link from '../Link'

export type LinkIconProps = {
  href: string
  type?: 'mailto' | 'tel'
  icon: IconProps['icon']
}

const LinkIcon: FC<LinkIconProps> = ({ type, href, icon }) => {
  return (
    <>
      <span>
        {type && (
          <a href={`${type}:${href}`}>
            <Icon icon={icon} />
          </a>
        )}
        {!type && (
          <Link href={href}>
            <Icon icon={icon} />
          </Link>
        )}
      </span>
      <style jsx>{`
        span :global(a:focus) {
          outline: none;
        }

        span :global(a:focus .icon) {
          color: var(--color-primary);
        }
      `}</style>
    </>
  )
}

export default LinkIcon
