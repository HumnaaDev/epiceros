export interface IReactQueryResponse {
    data: any
    dataUpdatedAt: number
    error: any
    errorUpdateCount: number
    errorUpdatedAt: number
    failureCount: number
    isError: boolean
    isFetched: true
    isFetchedAfterMount: true
    isFetching: boolean
    isIdle: boolean
    isLoading: boolean
    isLoadingError: boolean
    isPlaceholderData: boolean
    isPreviousData: boolean
    isRefetchError: boolean
    isRefetching: boolean
    isStale: true
    isSuccess: true
    refetch: () => void
    remove: () => void
    status: string
}

//just to give idea for global typings