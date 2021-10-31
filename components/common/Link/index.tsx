import { FC } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = Pick<NextLinkProps, 'href'>

const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <a href={href.toString()}>{children}</a>
    </NextLink>
  )
}

export default Link
