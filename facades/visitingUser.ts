import Component from 'vue-class-component'

import Vue from 'vue'

import { store } from '~/store'

import VisitingUserStore from '~/store/visitingUser'

export default interface VisitingUser {
    create_user(email: string, username: string, password: string);

    login(email: string, password: string);
}

@Component
class ConcreteVisitingUser extends Vue implements VisitingUser {
  create_user (email: string, username: string, password: string) {
    console.log(email, username, password)
    VisitingUserStore.SET_NAME('kk')
  }

  login (email: string, password: string) {
    console.log(email, password)
  }
}

export const concreteVisitingUser = new ConcreteVisitingUser({ store })
