import { FC } from 'react'

import { COLORS } from '../../common/constants/color'
import { STYLES } from '../../common/constants/styles'
import { Employee } from '../../pages/api/getEmployees'
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
              gridTemplateColumns: 'min-content auto min-content min-content',
              gridGap: STYLES.GAP
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
          color: ${COLORS.DARK};
        }

        .card :global(a:focus) {
          outline: none;
        }

        .card :global(a:focus > .icon) {
          color: ${COLORS.PRIMARY};
        }

        .card :global(a:focus > .card) {
          box-shadow: inset 0 0 0 5px ${COLORS.PRIMARY};
        }
      `}</style>
    </div>
  )
}

export default EmployeesCard
