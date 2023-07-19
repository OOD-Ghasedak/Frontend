import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import { store } from '~/store'

interface CoreState {
  name: string
}

@Module({ dynamic: true, name: 'VisitingUser', store, namespaced: true })
class VisitingUser extends VuexModule implements CoreState {
  // state
  name: string = ''

  // mutations
  @Mutation
  private SET_NAME (name: string) {
    this.name = name
  }

  @Action({})
  public create_user ({ email, username, password }: { email: string, username: string, password: string }) {
    console.log(email, username, password)
    // todo
  }

  @Action({})
  public login ({ email, password }: { email: string, password: string }) {
    console.log(email, password)

    // todo
  }
}

export default getModule(VisitingUser)
