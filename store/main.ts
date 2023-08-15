import Cookies from 'js-cookie'
import {
  Mutation,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import { store } from '~/store'

export interface MainStore {
  setAccessToken(accessToken: string);
  accessToken: string;
  setRefreshToken(refreshToken: string);
  refreshToken: string;
}

@Module({ dynamic: true, name: 'Main', store, namespaced: true })
class ConcreteMainStore extends VuexModule implements MainStore {
  @Mutation
  setAccessToken (accessToken: string) {
    Cookies.set('accessToken', accessToken)
  }

  get accessToken (): string {
    return Cookies.get('accessToken')
  }

  @Mutation
  setRefreshToken (refreshToken: string) {
    Cookies.set('refreshToken', refreshToken)
  }

  get refreshToken (): string {
    return Cookies.get('refreshToken')
  }
}

export default getModule(ConcreteMainStore)
