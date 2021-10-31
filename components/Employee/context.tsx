import { useRouter } from 'next/dist/client/router'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { Employee } from '../../common/types'

import { getEmployee } from '../../services/employee.service'

type EmployeeState = {
  employee?: Employee
}

type EmployeeAction = {
  type: 'SUCCESS_GET_EMPLOYEE'
  payload: Pick<EmployeeState, 'employee'>
}

type EmployeeContext = [EmployeeState, Dispatch<EmployeeAction>]

const initialState: Readonly<EmployeeState> = {}

const reducer = (
  state: EmployeeState,
  action: EmployeeAction
): EmployeeState => {
  switch (action.type) {
    case 'SUCCESS_GET_EMPLOYEE': {
      const { payload } = action
      const { employee } = payload

      return {
        ...state,
        employee
      }
    }

    default:
      return state
  }
}

type EmployeeProviderProps = {
  children: ReactNode
}

const EmployeeContext = createContext<EmployeeContext | undefined>(undefined)

export const EmployeeProvider: FC<EmployeeProviderProps> = ({ children }) => {
  const context = useReducer(reducer, initialState)
  const router = useRouter()
  const id = router.query.id as string
  const [, dispatch] = context

  useEffect(() => {
    if (!id) {
      return
    }

    const init = async () => {
      const employee = await getEmployee(id)

      if (employee) {
        dispatch({
          type: 'SUCCESS_GET_EMPLOYEE',
          payload: {
            employee
          }
        })
      }
    }

    init()
  }, [dispatch, id])

  return (
    <EmployeeContext.Provider value={context}>
      {children}
    </EmployeeContext.Provider>
  )
}

export function useEmployeeContext(): EmployeeContext {
  const context = useContext(EmployeeContext)

  if (!context) {
    throw new Error(
      'useEmployeeContext must be used within EmployeeContext.Provider'
    )
  }

  return context
}
