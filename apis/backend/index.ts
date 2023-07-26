import { AxiosRequestConfig } from 'axios'

export enum REQUEST_METHODS {
    GET = '$get',
    POST = '$post',
    DELETE = '$delete',
    PUT = '$put',
    PATCH = '$patch'
}

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
        public readonly requestName: REQUEST_METHODS,
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
