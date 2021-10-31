import { FC } from 'react'
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
        <Grid style={{ gridGap: '0.75rem' }}>
          {employees?.map(employee => (
            <EmployeesCard key={employee.id} employee={employee} />
          ))}
        </Grid>
      </Section>
    </Container>
  )
}

export default Employees
