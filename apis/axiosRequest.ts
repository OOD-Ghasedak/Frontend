import { AxiosRequestConfig } from 'axios'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export type AXIOS_REQUEST = '$get' | '$post' | '$delete' | '$put' | '$patch'

export class Url {
  constructor (private app: string, private parent?: Url) { }

  get address (): string {
    let currObj: Url = this
    const url: string[] = [currObj.app]
    while (currObj.parent) {
      currObj = currObj.parent
      url.push(currObj.app)
    }
    const urlString = url.reverse().join('/')
    return `${urlString}/`
  }
}

export class RequestParams {
  constructor (private url: Url,
    public readonly requestName: AXIOS_REQUEST,
    public readonly params: {
      withAuth?: boolean,
      retrieveAuth?: boolean,
      config?: AxiosRequestConfig,
      data?: any
    } = {}) { }

  axiosCallArgs (config): Array<any> {
    const otherArgs = ('data' in this.params) ? [this.params.data, config] : [config]
    return otherArgs
  }

  get address (): string {
    return this.url.address
  }
}

export interface BackendAPI {
  send(requestParams: RequestParams): Promise<any>;
}

class AxiosRequest extends OutsideVueComponent implements BackendAPI {
  defaultCatchFunction (error: any): void {
    if (error?.response?.data) {
      // this.$showError(error.response.data[Object.keys(error.response.data)[0]])
      console.error('error on Axios request.')
      console.error(error.response.data)
    }
  }

  getConfig (config: AxiosRequestConfig = {}, withAuth = false): AxiosRequestConfig {
    if (withAuth) {
      // todo sad,
      // put access token into config
      // const accessToken = this.$store.state
      config.headers = config.headers || {}
      config.headers.Authorization = `JWT ${this.mainConfig.$stores.visitingUser.accessToken}`
    }
    // todo use jwt-token here
    // const auth = this.$cookie.getCookie('auth')
    // if (withAuth && auth) {
    //   const authHeader = `Token ${auth}`
    //   const authHeaderName = 'Authorization'
    //   config.headers = config.headers || {}
    //   config.headers[authHeaderName] = authHeader
    // }
    return config
  }

  send (request: RequestParams): Promise<any> {
    const url: string = request.address
    const config = this.getConfig(request.params.config, request.params.withAuth)
    const otherArgs = request.axiosCallArgs(config)

    return new Promise((resolve, reject) => {
      this.$CurrentNuxtInstance.$axios[request.requestName](url, ...otherArgs)
        .then((response: any) => {
          if (request.params.retrieveAuth && response) {
            // todo retrieve jwt-token
            // this.$cookie.setCookie('auth', response.data.token)
            console.log('token response')
            console.log(response)
            this.mainConfig.$stores.visitingUser.setAccessToken(response.access_token)
            this.mainConfig.$stores.visitingUser.setRefreshToken(response.refresh_token)
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error.message)
        })
    })
  }
}

const concreteBackendAPI: BackendAPI = new AxiosRequest()
export default concreteBackendAPI
