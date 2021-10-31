import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { useBreakpoint } from '../../common/hooks/useBreakpoint'

import Container from '../common/container'
import Grid from '../common/grid'
import EmailIcon from '../common/Icon/EmailIcon'
import LinkIcon from '../common/Icon/LinkIcon'
import PhoneIcon from '../common/Icon/PhoneIcon'

import Section from '../common/section'
import { useEmployeeContext } from './context'

const Employees: FC = () => {
  const [state] = useEmployeeContext()
  const { breakpoint } = useBreakpoint()

  const { employee } = state
  const isMobile = breakpoint === 'mobile'

  return (
    <>
      {employee && (
        <Container>
          <Section>
            <Grid
              style={{
                alignItems: 'center',
                gap: 'var(--default-gap)',
                gridAutoFlow: isMobile ? 'row' : 'column',
                gridTemplateColumns: isMobile
                  ? ''
                  : 'max-content auto max-content max-content'
              }}
            >
              <LinkIcon href="/" icon={faArrowLeft} />
              <div>
                <h1>{employee.name}</h1>
              </div>
              {!isMobile && <EmailIcon email={employee.email} />}
              {!isMobile && <PhoneIcon phone={employee.phone} />}
            </Grid>
          </Section>
          <Section>
            <Grid
              style={{
                gap: 'var(--default-gap)',
                gridTemplateColumns: isMobile ? '' : 'repeat(2, 1fr)'
              }}
            >
              <div>
                <b>Company</b>
                <p>{employee.company.name}</p>
              </div>
              <div>
                <b>City</b>
                <p>{employee.address.city}</p>
              </div>
              <div>
                <b>Email</b>
                <p>
                  <a className="link" href={`mailto:${employee.email}`}>
                    {employee.email}
                  </a>
                </p>
              </div>
              <div>
                <b>Phone number</b>
                <p>
                  <a className="link" href={`tel:${employee.phone}`}>
                    {employee.phone}
                  </a>
                </p>
              </div>
            </Grid>
          </Section>
        </Container>
      )}
    </>
  )
}

export default Employees
