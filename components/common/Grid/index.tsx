import { CSSProperties, FC } from 'react'

type GridProps = {
  style?: Pick<
    CSSProperties,
    'gap' | 'gridAutoFlow' | 'gridTemplateColumns' | 'alignItems'
  >
}

const Grid: FC<GridProps> = ({ style, children }) => {
  return (
    <>
      <div style={style} className="grid">
        {children}
      </div>
      <style jsx>{`
        div {
          display: grid;
        }
      `}</style>
    </>
  )
}

export default Grid
