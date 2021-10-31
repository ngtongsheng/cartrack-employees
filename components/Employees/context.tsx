import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { EmployeeSearchResponse } from '../../common/types'

import { getEmployees } from '../../services/employee.service'

type EmployeeState = Partial<EmployeeSearchResponse> & {
  search: string
  city: string
}

type EmployeeAction =
  | {
      type: 'SUCCESS_GET_EMPLOYEES'
      payload: Pick<EmployeeState, 'employees' | 'aggregations'>
    }
  | {
      type: 'SEARCH_EMPLOYEES'
      payload: Pick<EmployeeState, 'search'>
    }
  | {
      type: 'FILTER_BY_CITY'
      payload: Pick<EmployeeState, 'city'>
    }

type EmployeesContext = [EmployeeState, Dispatch<EmployeeAction>]

const initialState: Readonly<EmployeeState> = {
  search: '',
  city: ''
}

const reducer = (
  state: EmployeeState,
  action: EmployeeAction
): EmployeeState => {
  switch (action.type) {
    case 'SUCCESS_GET_EMPLOYEES': {
      const { payload } = action
      const { employees, aggregations } = payload

      return {
        ...state,
        employees,
        aggregations
      }
    }

    case 'SEARCH_EMPLOYEES': {
      const { payload } = action
      const { search } = payload

      return {
        ...state,
        search
      }
    }

    case 'FILTER_BY_CITY': {
      const { payload } = action
      const { city } = payload

      return {
        ...state,
        city
      }
    }

    default:
      return state
  }
}

type EmployeesProviderProps = {
  children: ReactNode
}

const EmployeesContext = createContext<EmployeesContext | undefined>(undefined)

export const EmployeesProvider: FC<EmployeesProviderProps> = ({ children }) => {
  const context = useReducer(reducer, initialState)
  const [state, dispatch] = context
  const { search, city } = state

  useEffect(() => {
    const init = async () => {
      const { employees, aggregations } = await getEmployees({ search, city })

      dispatch({
        type: 'SUCCESS_GET_EMPLOYEES',
        payload: {
          employees,
          aggregations
        }
      })
    }

    init()
  }, [dispatch, search, city])

  return (
    <EmployeesContext.Provider value={context}>
      {children}
    </EmployeesContext.Provider>
  )
}

export function useEmployeesContext(): EmployeesContext {
  const context = useContext(EmployeesContext)

  if (!context) {
    throw new Error(
      'useEmployeesContext must be used within EmployeesContext.Provider'
    )
  }

  return context
}
