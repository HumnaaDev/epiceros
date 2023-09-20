import axios from 'axios'
import { ERROR_STATUS_CODE, ACCESS_TOKEN, NETWORK_ERROR } from '../constants'
import { LocalStorage } from './browser-storage'
import { AppError } from './errors'

interface Setting {
  baseUrl?: string
  withAuthentication?: boolean
}

class Http {
  _localStorageService: LocalStorage
  _baseUrl: string
  _token: string | null
  constructor (settings?: Setting) {
    this._localStorageService = new LocalStorage()
    this._baseUrl = settings?.baseUrl ?? process.env.BASE_URL ?? ''
    this._token = settings?.withAuthentication === true
      ? `Bearer ${this._localStorageService.getItemByKey(ACCESS_TOKEN) as string}`
      : null
  }

  static createConnection (settings?: Setting): Http {
    return new Http(settings)
  }

  public async get<T>(url: string, params?: any, options?: any): Promise<T> {
    const response = axios.get<T>(`${this._baseUrl}/${url}`, {
      headers: {
        Authorization: this._token ?? ''
      }
    })
    return await response
    .then((resp) => {
        return resp.data
    })
    .catch((error) => {
        const { data, status } = error.response
        throw new AppError(
            `Http.post(${this._baseUrl}/${url})`,
            ERROR_STATUS_CODE.includes(status) ? data?.message : error.message,
            error.code,
            error.response.status,
            { params, options }
        )
    })
  }

  public async post<T>(url: string, body?: any, options?: any): Promise<T> {
    const response = axios.post<T>(`${this._baseUrl}/${url}`, body, {
      headers: {
        Authorization: this._token ?? ''
      }
    })
    return await response
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        const { data, status } = error.response
        throw new AppError(
          `Http.post(${this._baseUrl}/${url})`,
          ERROR_STATUS_CODE.includes(status) ? data?.message : error.message,
          error.code,
          error.response.status,
          { body, options }
        )
      })
  }
}

export default Http
