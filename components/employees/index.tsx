import { FC } from 'react'
import { STYLES } from '../../common/constants/styles'
import Container from '../common/container'
import Grid from '../common/grid'
import Section from '../common/section'
import { useEmployeesContext } from './context'
import EmployeesCard from './EmployeesCard'

const Employees: FC = () => {
  const [state] = useEmployeesContext()
  const { employees } = state
  return (
    <Container>
      <Section>
        <Grid style={{ gridGap: `calc(${STYLES.GAP} / 2)` }}>
          {employees?.map(employee => (
            <EmployeesCard key={employee.id} employee={employee} />
          ))}
        </Grid>
      </Section>
    </Container>
  )
}

export default Employees
