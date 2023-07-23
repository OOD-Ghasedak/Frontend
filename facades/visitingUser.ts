import VisitingUserStore from '~/store/visitingUser'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface VisitingUser {
  create_user(email: string, username: string, password: string);

  login(email: string, password: string);
}

class ConcreteVisitingUser extends OutsideVueComponent implements VisitingUser {
  create_user (email: string, username: string, password: string) {
    console.log(email, username, password)
    console.log(this.$CurrentNuxtInstance.$axios.defaults.baseURL)
    VisitingUserStore.SET_NAME('kk')
  }

  login (email: string, password: string) {
    console.log(email, password)
  }
}

export const concreteVisitingUser = new ConcreteVisitingUser()
