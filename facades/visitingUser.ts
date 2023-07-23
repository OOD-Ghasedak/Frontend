// import VisitingUserStore from '~/store/visitingUser'
import { OutsideVueComponent } from '~/utils/connectToNuxt'
import axiosRequest, { RequestParams } from '~/apis/axiosRequest'
import { LOGIN_URL, SIGNUP_URL } from '~/urls/account'

export default interface VisitingUser {
  create_user(email: string, username: string, phone_number: string, password: string): Promise<any>;

  login(emailOrUsername: string, password: string): Promise<any>;
}

class ConcreteVisitingUser extends OutsideVueComponent implements VisitingUser {
  create_user (email: string, username: string, phoneNumber: string, password: string) {
    console.log('create_user')

    return axiosRequest.axiosRequest(new RequestParams(
      SIGNUP_URL,
      '$post',
      {
        data: { email, username, phone_number: phoneNumber, password }
      }
    )).then(() => {
      console.log('success')
    }).catch(() => {
      console.log('failure')
    })
  }

  login (emailOrUsername: string, password: string) {
    console.log('login')
    return axiosRequest.axiosRequest(new RequestParams(
      LOGIN_URL,
      '$post',
      {
        data: { email_or_username: emailOrUsername, password },
        retrieveAuth: true
      }
    )).then(() => {
      console.log('success')
    }).catch(() => {
      console.log('failure')
    })
  }
}

export const concreteVisitingUser = new ConcreteVisitingUser()
