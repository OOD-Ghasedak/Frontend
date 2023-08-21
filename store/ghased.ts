import {
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import { store } from '~/store'

export interface GhasedStore {
}

@Module({ dynamic: true, name: 'Ghased', store, namespaced: true })
class ConcreteGhasedStore extends VuexModule implements GhasedStore {
}

export default getModule(ConcreteGhasedStore)
