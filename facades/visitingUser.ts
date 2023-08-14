import { OutsideVueComponent } from '~/utils/connectToNuxt'
import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { LOGIN_URL, SIGNUP_URL, VERIFY_SIGNUP_URL } from '~/urls/account'

export default interface VisitingUser {
  signUp(emailOrPhoneNumber: string): Promise<any>;

  signUpVerify(verifyCode: string): Promise<any>;

  signUpComplete(username: string, password: string): Promise<any>;

  login(emailOrUsername: string, password: string): Promise<any>;
}

class PhoneNumberOrEmailValidator extends OutsideVueComponent {
  private readonly phoneNumberPattern: RegExp = /^[0][9]\d{9}$/
  private readonly emailPattern: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])+)\])/
  public validateSignUpInput (emailOrPhoneNumber: string): Promise<object> {
    return new Promise((resolve, reject) => {
      if (this.phoneNumberPattern.test(emailOrPhoneNumber)) {
        const phoneNumber = this.$CurrentNuxtInstance.$options.filters.toPersianDigits(emailOrPhoneNumber)
        resolve({ phone_number: phoneNumber, email: null })
      } else if (this.emailPattern.test(emailOrPhoneNumber)) {
        resolve({ email: emailOrPhoneNumber, phone_number: null })
      } else {
        reject(new Error('Input is Not Valid'))
      }
    })
  }
}

class ConcreteVisitingUser extends OutsideVueComponent implements VisitingUser {
  private readonly phoneNumberOrEmailValidator = new PhoneNumberOrEmailValidator()

  signUp (emailOrPhoneNumber: string): Promise<any> {
    return this.phoneNumberOrEmailValidator.validateSignUpInput(emailOrPhoneNumber)
      .then((sendData) => {
        return this.mainConfig.$apis.backend.send(new RequestParams(VERIFY_SIGNUP_URL, REQUEST_METHODS.POST, {
          data: sendData
        }))
          .then((data) => {
            const otp = data.otp
            this.$CurrentNuxtInstance.showMessage(`کد فرستاده شده به تلفن/شماره موبایل شما ${otp} است. متاسفانه سیستم پیامکی ما غیرفعال است.`)
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
