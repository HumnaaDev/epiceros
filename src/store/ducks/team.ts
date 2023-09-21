import { type ITeam } from '../configs'
import type IActions from '../configs'
import { type Dispatch, type ReducerAction } from 'react'

export const UPDATE_TEAM = 'UPDATE_TEAM'

export const initialState: ITeam =  []

const reducer = (
  state: typeof initialState,
  action: IActions
): typeof initialState => {
  switch (action.type) {
    case UPDATE_TEAM:
      return [...state, action.payload]
  }
  return state
}

export const updateTeam = (
  data: string,
  dispatch: Dispatch<ReducerAction<typeof reducer>>
): void => {
    dispatch({ type: UPDATE_TEAM, payload: data })
}

export default reducer
