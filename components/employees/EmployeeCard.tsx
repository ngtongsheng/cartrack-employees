import { FC } from 'react'
import { Employee } from '../../common/types'
import Avatar from '../common/avatar'
import Card from '../common/card'
import Grid from '../common/grid'
import EmailIcon from '../common/Icon/EmailIcon'
import PhoneIcon from '../common/Icon/PhoneIcon'
import Link from '../common/Link'

type EmployeesCardProps = {
  employee: Employee
}

const EmployeesCard: FC<EmployeesCardProps> = ({ employee }) => {
  const { id, name, company, phone, email } = employee

  return (
    <div className="card">
      <Link href={`/${id}`}>
        <Card>
          <Grid
            style={{
              alignItems: 'center',
              gridAutoFlow: 'column',
              gridTemplateColumns: 'max-content auto max-content max-content',
              gap: 'var(--default-gap)'
            }}
          >
            <Avatar name={name} />
            <div>
              <b>{name}</b>
              <div>{company.name}</div>
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
