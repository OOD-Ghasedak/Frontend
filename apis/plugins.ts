import { Plugin } from '@nuxt/types'
import concreteBackendAPI from './backend/axiosRequest'
import { BackendAPI } from './backend'
import FileAPI, { concreteFileAPI } from './fileAPI'

interface APIs {
  backend: BackendAPI,
  file: FileAPI
}

const concreteAPIs: APIs = {
  backend: concreteBackendAPI,
  file: concreteFileAPI
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
