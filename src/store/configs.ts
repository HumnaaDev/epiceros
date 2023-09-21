export default interface IActions {
  payload: any
  type: string
}

export type ITeam = string[]

export interface StoreContextType {
  states: {
    team: ITeam
  }
  actions: {
    setTeam: (data: string[]) => void
  }
}

export const defaultStoreValues = {
  states: {
    team: [],
  },
  actions: {
    setTeam: (): void => {},
  }
}
