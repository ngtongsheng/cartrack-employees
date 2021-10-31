import { useRef } from 'react'
import { COLORS } from '../../../common/constants/color'

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

  const randomColor = useRef(
    '#' + Math.floor(Math.random() * 999999 + 0x444444).toString(16)
  )

  return (
    <>
      <div>{initial.current}</div>
      <style jsx>{`
        div {
          background-color: ${randomColor.current};
          line-height: 3rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          text-align: center;
          color: ${COLORS.WHITE};
          filter: saturate(0.3);
        }
      `}</style>
    </>
  )
}
