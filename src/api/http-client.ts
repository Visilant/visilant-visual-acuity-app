import { store } from '@store'
import { AppConfig } from '@config'
import { logoutInterceptor } from './logout.interceptor'
import { Interceptor } from './types'

export class HttpClient {
  constructor(
    private baseUrl: string,
    private interceptors: Interceptor[]
  ) {}

  private getUrl(path: string): string {
    const url = new URL(path, this.baseUrl)
    return url.href
  }

  private getHeaders(): Headers {
    const token = store.getState().auth.token

    const headers = new Headers()
    headers.set('authorization', `Bearer ${token}`)
    headers.append('Content-Type', 'application/json; charset=utf-8')

    return headers
  }

  private async fetch(path: string, method: 'GET' | 'POST' | 'PATCH' | 'PUT', body?: unknown) {
    await Promise.all(this.interceptors.map(interceptor => interceptor()))

    const url = this.getUrl(path)
    const response = await fetch(url, {
      method,
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const error = await response.text()
      throw error
    }

    return await response.json()
  }

  public async get<Response>(path: string): Promise<Response> {
    const response = await this.fetch(path, 'GET')

    return response
  }

  public async post<Body, Response>(path: string, body: Body): Promise<Response> {
    const response = await this.fetch(path, 'POST', body)

    return response
  }

  public async put<Body, Response>(path: string, body: Body): Promise<Response> {
    const response = await this.fetch(path, 'PUT', body)

    return response
  }

  public async patch<Body, Response>(path: string, body: Body): Promise<Response> {
    const response = await this.fetch(path, 'PATCH', body)

    return response
  }
}

const config = AppConfig.getConfig()
export const httpClient = new HttpClient(config.apiBaseUrl, [logoutInterceptor])
