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

  @Mutation
  setOTP (otp: string) {
    Cookies.set('otp', otp)
  }

  get otp (): string {
    return Cookies.get('otp')
  }
}

export default getModule(ConcreteVisitingUserStore)
