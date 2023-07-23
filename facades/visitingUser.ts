// import VisitingUserStore from '~/store/visitingUser'
import { OutsideVueComponent } from '~/utils/connectToNuxt'
import axiosRequest, { RequestParams } from '~/apis/axiosRequest'
import { SIGNUP_URL } from '~/urls/account'

export default interface VisitingUser {
  create_user(email: string, username: string, phone_number: string, password: string);

  login(emailOrUsername: string, password: string);
}

class ConcreteVisitingUser extends OutsideVueComponent implements VisitingUser {
  create_user (email: string, username: string, phoneNumber: string, password: string) {
    console.log('props: ', email, username)

    axiosRequest.axiosRequest(new RequestParams(
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
    console.log(emailOrUsername, password)
  }
}

export const concreteVisitingUser = new ConcreteVisitingUser()
