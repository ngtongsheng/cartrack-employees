import { FC } from 'react'
import Container from '../common/Container'
import Grid from '../common/Grid'
import Section from '../common/Section'
import { useEmployeesContext } from './context'
import EmployeeCard from './EmployeeCard'
import EmployeeCitySelect from './EmployeeCitySelect'
import EmployeeSearchInput from './EmployeeSearchInput'

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
          <EmployeeSearchInput />
          <EmployeeCitySelect />
        </Grid>
      </Section>
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
