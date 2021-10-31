import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { COLORS } from '../../common/constants/color'
import { STYLES } from '../../common/constants/styles'
import { Employee } from '../../pages/api/getEmployees'
import Avatar from '../common/avatar'
import Card from '../common/card'
import Grid from '../common/grid'
import Icon from '../common/Icon'

type EmployeesCardProps = {
  employee: Employee
}

const EmployeesCard: FC<EmployeesCardProps> = ({ employee }) => {
  const { name, company, phone, email } = employee

  return (
    <div className="card">
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
            <div>
              <b>{name}</b>
            </div>
            <span>{company.name}</span>
          </div>
          <a href={`mailto:${email}`}>
            <Icon icon={faEnvelope} />
          </a>
          <a href={`tel:${phone}`}>
            <Icon icon={faPhone} />
          </a>
        </Grid>
      </Card>
      <style jsx>{`
        .card :global(.icon) {
          color: ${COLORS.LIGHT};
        }

        .card a:focus {
          outline: none;
        }

        .card a:focus :global(.icon) {
          color: ${COLORS.PRIMARY};
        }
      `}</style>
    </div>
  )
}

export default EmployeesCard
