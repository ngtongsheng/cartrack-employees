import { FC } from 'react'
import { useBreakpoint } from '../../common/hooks/useBreakpoint'
import Container from '../common/Container'
import Grid from '../common/Grid'
import Section from '../common/Section'
import { useEmployeesContext } from './context'
import EmployeeCard from './EmployeeCard'
import EmployeeCitySelect from './EmployeeCitySelect'
import EmployeeSearchInput from './EmployeeSearchInput'

const Employees: FC = () => {
  const [state] = useEmployeesContext()
  const { breakpoint } = useBreakpoint()
  const isMobile = breakpoint === 'mobile'
  const { employees } = state

  return (
    <Container>
      <Section>
        <h1>Refine your search</h1>
        <br />

        <Grid
          style={{
            gap: `calc(var(--default-gap) / 2)`,
            gridAutoFlow: isMobile ? '' : 'column',
            gridTemplateColumns: isMobile ? '' : '1fr 1fr'
          }}
        >
          <EmployeeSearchInput />
          <EmployeeCitySelect />
        </Grid>
      </Section>
      <Section>
        {!employees && 'Loading...'}
        {employees && (
          <>
            {!employees.length && 'No result.'}
            {employees.length > 1 && `${employees?.length} results.`}
            {employees.length === 1 && '1 result.'}
          </>
        )}
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
