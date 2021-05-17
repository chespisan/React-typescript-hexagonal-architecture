import axios from 'axios'

export class HttpService {
  async get<T>(url: string) {
    return (await axios.get(url)) as T
  }

  async post<T>(url: string, body: any) {
    return (await axios.post(url, body)) as T
  }

  async put<T>(url: string, body: any) {
    return (await axios.post(url, body)) as T
  }

  async delete<T>(url: string) {
    return (await axios.delete(url)) as T
  }
}
