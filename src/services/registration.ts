import Http from '../api/http-api'
import { IRegisterForm } from '@/app/register/register.type'
import { useMutation, type UseMutateFunction } from 'react-query'

const BASE_URL = process.env.BASE_URL
const REGISTRATION = ''

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