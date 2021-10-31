import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { Employee } from '../../pages/api/getEmployees'
import { getEmployees } from '../../services/employee.service'

type EmployeeState = {
  employees?: Employee[]
}

type EmployeeAction =
  | {
      type: 'SUCCESS_GET_EMPLOYEES'
      payload: Pick<EmployeeState, 'employees'>
    }
  | {
      type: 'SEARCH_EMPLOYEES'
    }

type EmployeesContext = [EmployeeState, Dispatch<EmployeeAction>]

const initialState: Readonly<EmployeeState> = {}

const reducer = (
  state: EmployeeState,
  action: EmployeeAction
): EmployeeState => {
  switch (action.type) {
    case 'SUCCESS_GET_EMPLOYEES': {
      const { payload } = action
      const { employees } = payload

      return {
        ...state,
        employees
      }
    }

    case 'SEARCH_EMPLOYEES': {
      return {
        ...state
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
  const [, dispatch] = context

  useEffect(() => {
    const init = async () => {
      const employees = await getEmployees()

      dispatch({
        type: 'SUCCESS_GET_EMPLOYEES',
        payload: {
          employees
        }
      })
    }

    init()
  }, [dispatch])

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
