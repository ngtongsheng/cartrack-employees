import { FC, useCallback } from 'react'
import Select from '../common/Select'
import { useEmployeesContext } from './context'

const EmployeeCitySelect: FC = () => {
  const [state, dispatch] = useEmployeesContext()
  const { aggregations } = state

  // const debouncedValue = useDebounce(value)

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

  // useEffect(() => {
  //   dispatch({
  //     type: 'SEARCH_EMPLOYEES',
  //     payload: {
  //       search: debouncedValue
  //     }
  //   })
  // }, [dispatch, debouncedValue])

  return (
    <Select value={state.city} onChange={handleChange}>
      <option value="" selected disabled>
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
