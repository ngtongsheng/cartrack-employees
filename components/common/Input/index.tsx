import { FC, InputHTMLAttributes } from 'react'
import Icon, { IconProps } from '../Icon'

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<Pick<IconProps, 'icon'>>

const Input: FC<InputProps> = ({ icon, ...props }) => {
  return (
    <>
      <div className="input">
        <input {...props} />
        {icon && <Icon icon={icon} />}
      </div>
      <style jsx>{`
        input {
          font-size: 1rem;
          border-radius: var(--default-border-radius);
          height: var(--default-control-height);
          width: 100%;
          box-shadow: inset 0 0 0 5px var(--color-light);
          border: none;
          padding: var(--default-gap);
        }

        input:focus {
          outline: none;
          box-shadow: inset 0 0 0 5px var(--color-primary);
        }
      `}</style>
    </>
  )
}

export default Input
