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
      <Link href={`/${id}`}>
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

            <div>
              <b>
                <HighlistText text={name} search={search} />
              </b>
              <HighlistText text={email} search={search} />
            </div>

            <EmailIcon email={email} />
            <PhoneIcon phone={phone} />
          </Grid>
        </Card>
      </Link>
      <style jsx>{`
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

        .card :global(a:focus > .card),
        .card :global(a:hover > .card) {
          box-shadow: inset 0 0 0 5px var(--color-primary);
        }
      `}</style>
    </div>
  )
}

export default EmployeesCard
