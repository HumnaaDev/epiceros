import { get } from '@/api/http-api'
import { UseQueryResult, useQuery } from 'react-query'
  
const GET_TEAM = '9118e647-e131-43c7-8668-d99af1abb5a6'

export const useGetTeamData = () : UseQueryResult<{team: string[]}> => {
    return useQuery(['TEAM_DATA', GET_TEAM], () => get(GET_TEAM), {
        refetchOnWindowFocus: false
    })
}