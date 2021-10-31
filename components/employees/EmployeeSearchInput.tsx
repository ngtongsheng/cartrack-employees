import { FC, useCallback, useEffect, useState } from 'react'
import useDebounce from '../../common/hooks/useDebounce'
import Input from '../common/Input'
import { useEmployeesContext } from './context'

const EmployeeSearchInput: FC = () => {
  const [state, dispatch] = useEmployeesContext()
  const { search } = state
  const [value, setValue] = useState(search)
  const debouncedValue = useDebounce(value)

  const handleChange = useCallback(event => {
    setValue(event.target.value)
  }, [])

  useEffect(() => {
    dispatch({
      type: 'SEARCH_EMPLOYEES',
      payload: {
        search: debouncedValue
      }
    })
  }, [dispatch, debouncedValue])

  return (
    <Input
      placeholder="Search name or email"
      onChange={handleChange}
      value={value}
    />
  )
}

export default EmployeeSearchInput
