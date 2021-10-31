import { FC } from 'react'

const highlightMatched = (text: string, search: string) => {
  const regex = new RegExp(`(${search})`, 'ig')

  return text
    .split(regex)
    .map(value => {
      if (regex.test(value)) {
        return `<span><b>${value}</b></span>`
      }

      return value
    })
    .join('')
}

type HighlistTextProps = {
  text: string
  search: string
}

const HighlistText: FC<HighlistTextProps> = ({ text, search }) => {
  return (
    <>
      {!search && <div>{text}</div>}
      {search && (
        <div
          dangerouslySetInnerHTML={{ __html: highlightMatched(text, search) }}
        />
      )}

      <style jsx>{`
        span {
          color: var(--color-primary);
        }
      `}</style>
    </>
  )
}

export default HighlistText
