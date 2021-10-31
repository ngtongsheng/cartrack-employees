import { FC, useCallback } from 'react'
import Select from '../common/Select'
import { useEmployeesContext } from './context'

const EmployeeCitySelect: FC = () => {
  const [state, dispatch] = useEmployeesContext()
  const { aggregations } = state

  const handleChange = useCallback(
    event => {
      dispatch({
        type: 'FILTER_BY_CITY',
        payload: {
          city: event.target.value
        }
      })
    },
    [dispatch]
  )

  return (
    <Select defaultValue={state.city} onChange={handleChange}>
      <option value="" disabled>
        Select a city
      </option>
      {aggregations?.cities.map(city => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </Select>
  )
}

export default EmployeeCitySelect
