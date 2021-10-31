import { FC } from 'react'
import { Employee } from '../../common/types'
import Avatar from '../common/Avatar'
import Card from '../common/Card'
import Grid from '../common/Grid'
import HighlistText from '../common/HighlistText'
import EmailIcon from '../common/Icon/EmailIcon'
import PhoneIcon from '../common/Icon/PhoneIcon'
import Link from '../common/Link'
import { useEmployeesContext } from './context'

type EmployeesCardProps = {
  employee: Employee
}

const EmployeesCard: FC<EmployeesCardProps> = ({ employee }) => {
  const [state] = useEmployeesContext()
  const { search } = state
  const { id, name, phone, email } = employee

  return (
    <div className="card">
      <Card>
        <Grid
          style={{
            alignItems: 'center',
            gridAutoFlow: 'column',
            gridTemplateColumns: 'max-content auto max-content max-content  ',
            gap: 'var(--default-gap)'
          }}
        >
          <Avatar name={name} />

          <Link href={`/${id}`}>
            <b>
              <HighlistText text={name} search={search} />
            </b>

            <div className="email">
              <HighlistText text={email} search={search} />
            </div>
          </Link>

          <EmailIcon email={email} />
          <PhoneIcon phone={phone} />
        </Grid>
      </Card>
      <style jsx>{`
        .email > :global(div),
        .card :global(.grid > a) {
          overflow: hidden;
        }

        .email > :global(div) {
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card :global(.icon) {
          color: var(--color-dark);
        }

        .card :global(a:focus) {
          outline: none;
        }

        .card :global(span),
        .card :global(a:focus > .icon) {
          color: var(--color-primary);
        }

        .card :global(.card:focus-within),
        .card :global(.card:hover) {
          box-shadow: inset 0 0 0 5px var(--color-primary);
        }
      `}</style>
    </div>
  )
}

export default EmployeesCard
