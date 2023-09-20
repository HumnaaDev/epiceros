import Http from '../api/http-api'
import { IRegisterForm } from '@/app/register/register.type'
import { useMutation, type UseMutateFunction, useQueryClient, useQuery } from 'react-query'

const BASE_URL = process.env.BASE_URL
const REGISTRATION = ''
const TEAM_DATA = '9118e647-e131-43c7-8668-d99af1abb5a6'

export const useRegistration = (): {
    data: IRegisterForm | undefined
    isLoading: boolean
    mutate: UseMutateFunction
    error: string
} => {
  const { data, isLoading, mutate, error } = useMutation<IRegisterForm, any>(
    async (body) => {
      const apiService = Http.createConnection({
        baseUrl: BASE_URL,
        withAuthentication: true
      })
      return await apiService.post(REGISTRATION, body)
    }
  )
  return { data, isLoading, mutate, error: error?.message }
}

export const useGetTeamData = () : {
    data: any
    isLoading: boolean
    error: string
} => {
    const { data, isLoading, error } = useQuery<string[], any >(
        TEAM_DATA,
      async () => {
        const apiService = Http.createConnection({
          baseUrl: BASE_URL,
          withAuthentication: true
        })
        return await apiService.get(TEAM_DATA)
      },
    )
    return { data, isLoading, error: error?.message  }
}
  