import axios from 'axios'
// import Config from 'react-native-config'

class HttpService {
  constructor() {
    axios.defaults.baseURL = '' // `${Config.API_HOST}`
  }

  public get(uri: string, params?: object) {
    return axios.get(uri, {
      params,
    })
  }

  public post(uri: string, body: any) {
    return axios.post(uri, body)
  }

  public put(uri: string, body: any) {
    return axios.put(uri, body)
  }

  public patch(uri: string, body: any) {
    return axios.patch(uri, body)
  }

  public delete(uri: string) {
    return axios.delete(uri)
  }
}

export default new HttpService()
