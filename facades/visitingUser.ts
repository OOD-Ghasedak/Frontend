import { OutsideVueComponent } from '~/utils/connectToNuxt'
import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { LOGIN_URL, SIGNUP_URL } from '~/urls/account'

export default interface VisitingUser {
  signUp(emailOrPhoneNumber: string): Promise<any>;

  signUpVerify(verifyCode: string): Promise<any>;

  signUpComplete(username: string, password: string): Promise<any>;

  login(emailOrUsername: string, password: string): Promise<any>;
}

class ConcreteVisitingUser extends OutsideVueComponent implements VisitingUser {
  signUp (emailOrPhoneNumber: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  signUpVerify (verifyCode: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  signUpComplete (username: string, password: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  login (emailOrUsername: string, password: string) {
    console.log('login')
    return this.mainConfig.$apis.backend.send(new RequestParams(
      LOGIN_URL,
      REQUEST_METHODS.POST,
      {
        data: { email_or_username: emailOrUsername, password },
        retrieveAuth: true
      }
    )).then(() => {
      console.log('success')
    }).catch((response) => {
      console.log('failure')
      throw response
    })
  }
}

export const concreteVisitingUser = new ConcreteVisitingUser()
