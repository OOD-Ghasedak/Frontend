import { OutsideVueComponent } from '~/utils/connectToNuxt'
import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { LOGIN_URL, SIGNUP_URL, VERIFY_SIGNUP_URL } from '~/urls/account'
import { phoneNumberOrEmailValidator } from '~/utils/phoneNumberValidator'

export default interface VisitingUser {
  signUp(emailOrPhoneNumber: string): Promise<any>;

  signUpVerify(verifyCode: string): Promise<any>;

  signUpComplete(username: string, password: string): Promise<any>;

  login(emailOrUsername: string, password: string): Promise<any>;
}

class ConcreteVisitingUser extends OutsideVueComponent implements VisitingUser {
  private readonly phoneNumberOrEmailValidator = phoneNumberOrEmailValidator

  signUp (emailOrPhoneNumber: string): Promise<any> {
    return this.phoneNumberOrEmailValidator.validateSignUpInput(emailOrPhoneNumber)
      .then((sendData) => {
        return this.mainConfig.$apis.backend.send(new RequestParams(VERIFY_SIGNUP_URL, REQUEST_METHODS.POST, {
          data: sendData
        }))
          .then((data) => {
            this.mainConfig.$stores.visitingUser.setEmailOrPhoneNumber(emailOrPhoneNumber)
            const otp = data.otp
            this.$CurrentNuxtInstance.showMessage(`کد فرستاده شده به ایمیل/تلفن شما ${otp} است. متاسفانه سیستم پیامکی ما غیرفعال است.`)
          })
      })
  }

  signUpVerify (verifyCode: string): Promise<any> {
    return new Promise((resolve) => {
      this.mainConfig.$stores.visitingUser.setOTP(verifyCode)
      resolve('Success')
    })
  }

  signUpComplete (username: string, password: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(SIGNUP_URL, REQUEST_METHODS.POST, {
      data: {
        username,
        password,
        otp: this.mainConfig.$stores.visitingUser.otp
      }
    }))
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
