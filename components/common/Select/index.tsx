import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FC, SelectHTMLAttributes } from 'react'
import Icon from '../Icon'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

const Select: FC<SelectProps> = ({ ...props }) => {
  return (
    <>
      <div className="select">
        <select {...props} />
        <Icon icon={faChevronDown} />
      </div>
      <style jsx>{`
        select {
          cursor: pointer;
          appearance: none;
          font-size: 1rem;
          border-radius: var(--default-border-radius);
          height: var(--default-control-height);
          width: 100%;
          box-shadow: inset 0 0 0 5px var(--color-light);
          border: none;
          padding: var(--default-gap);
        }

        .select {
          position: relative;
        }

        .select :global(.icon) {
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        select:focus {
          outline: none;
          box-shadow: inset 0 0 0 5px var(--color-primary);
        }
      `}</style>
    </>
  )
}

export default Select
