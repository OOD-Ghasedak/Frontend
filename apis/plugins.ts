import { Plugin } from '@nuxt/types'
import concreteBackendAPI, { BackendAPI } from './axiosRequest'

interface APIs {
    backend: BackendAPI
}

const concreteAPIs: APIs = {
  backend: concreteBackendAPI
}

declare module '@nuxt/types' {
    interface Context {
        $apis: APIs
    }
}

const apisPlugin: Plugin = (context) => {
  context.$apis = concreteAPIs
}

export default apisPlugin
