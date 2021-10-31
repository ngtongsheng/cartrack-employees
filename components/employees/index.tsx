import { FC } from 'react'
import Container from '../common/container'
import Grid from '../common/grid'
import Section from '../common/section'
import { useEmployeesContext } from './context'
import EmployeeCard from './EmployeeCard'

const Employees: FC = () => {
  const [state] = useEmployeesContext()
  const { employees } = state
  return (
    <Container>
      <Section>
        <Grid
          style={{
            gap: `calc(var(--default-gap) / 2)`
          }}
        >
          {employees?.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </Grid>
      </Section>
    </Container>
  )
}

export default Employees
