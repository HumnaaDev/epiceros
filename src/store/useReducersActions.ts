import { useReducer } from 'react'
import { StoreContextType } from './configs'
import teamReducer, {
  initialState as teamInitialState,
  updateTeam
} from './ducks/team'

const useReducerActions = (): StoreContextType => {
  const [team, teamDispatch] = useReducer(teamReducer, teamInitialState)

  const actions = {
    setTeam: (data: string) => {
      updateTeam(data, teamDispatch)
    }
  }

  const states = { team }
  return {
    actions,
    states
  }
}

export default useReducerActions
