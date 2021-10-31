import { useRef } from 'react'

type AvatarProps = {
  name?: string
}

export default function Avatar({ name }: AvatarProps) {
  const initial = useRef(
    name
      ?.split(' ')
      .filter(value => !!value)
      .slice(0, 2)
      .map(value => value.charAt(0))
      .join('')
      .toUpperCase() || ''
  )

  return (
    <>
      <div>{initial.current}</div>
      <style jsx>{`
        div {
          background-color: var(--color-dark);
          line-height: 3rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          text-align: center;
          color: var(--color-white);
        }
      `}</style>
    </>
  )
}
