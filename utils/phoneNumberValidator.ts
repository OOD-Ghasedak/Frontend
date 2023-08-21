import { OutsideVueComponent } from './connectToNuxt'

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

export const phoneNumberOrEmailValidator = new PhoneNumberOrEmailValidator()
