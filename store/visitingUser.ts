import Cookies from 'js-cookie'
import {
  Mutation,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import { store } from '~/store'

export interface VisitingUserStore {
  setOTP(otp: string);
  otp: string;
  setEmailOrPhoneNumber(emailOrPhoneNumber: string);
  emailOrPhoneNumber: string;
  setAccessToken(accessToken: string);
  accessToken: string;
  setRefreshToken(refreshToken: string);
  refreshToken: string;
}

@Module({ dynamic: true, name: 'VisitingUser', store, namespaced: true })
class ConcreteVisitingUserStore extends VuexModule implements VisitingUserStore {
  @Mutation
  setEmailOrPhoneNumber (emailOrPhoneNumber: string) {
    Cookies.set('emailOrPhoneNumber', emailOrPhoneNumber)
  }

  get emailOrPhoneNumber (): string {
    return Cookies.get('emailOrPhoneNumber')
  }

  private _accessToken: string = ''
  private _refreshToken: string = ''

  @Mutation
  setOTP (otp: string) {
    Cookies.set('otp', otp)
  }

  get otp (): string {
    return Cookies.get('otp')
  }

  @Mutation
  setAccessToken (accessToken: string) {
    Cookies.set('accessToken', accessToken)
    console.log('cookies set')

    // this._accessToken = accessToken
  }

  get accessToken (): string {
    return Cookies.get('accessToken')
    // return this._accessToken
  }

  @Mutation
  setRefreshToken (refreshToken: string) {
    this._refreshToken = refreshToken
  }

  get refreshToken (): string {
    return this._refreshToken
  }
}

export default getModule(ConcreteVisitingUserStore)
