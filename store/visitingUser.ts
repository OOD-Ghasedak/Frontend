import {
  Mutation,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import { store } from '~/store'

interface CoreState {
  name: string
}

@Module({ dynamic: true, name: 'VisitingUser', store, namespaced: true })
class VisitingUserStore extends VuexModule implements CoreState {
  // state
  name: string = ''

  // mutations
  @Mutation
  public SET_NAME (name: string) {
    this.name = name
    console.log(`set name ${this.name}`)
  }
}

export default getModule(VisitingUserStore)
