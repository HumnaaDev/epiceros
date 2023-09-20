type IResponseCode = string | number
type ErrorCode = string

export class AppError extends Error {
  serviceName: string
  message: string
  code: IResponseCode
  errorCode: ErrorCode
  error: any
  requestBody: any

  constructor (
    name: string,
    message: string,
    errorCode?: ErrorCode,
    code?: IResponseCode,
    requestBody?: any
  ) {
    super(message)
    this.serviceName = name ?? this.name
    this.message =
      typeof message === 'string' ? message : 'No Details' ?? this.message
    this.code = code ?? 500
    this.errorCode = errorCode ?? 'UNHANDLED_EXCEPTION'
    this.error = typeof message === 'object' ? message : {}
    this.requestBody = requestBody ?? null
  }
}

export interface ErrorDataType {
  status?: number
  errorCode?: string
  message?: string
}

export class ApiError extends Error {
  name: string
  constructor (
    public response: Response,
    public data?: ErrorDataType,
    message?: string
  ) {
    super(message ?? response.statusText)
    this.name = this.constructor.name
  }
}
