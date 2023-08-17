import Cookies from 'js-cookie'
import {
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'
import { ChannelRole } from '~/models'
import { store } from '~/store'

export interface GhasedStore {
  setEnteredChannelRole(channelRole: ChannelRole);
  channelRole: ChannelRole
}

@Module({ dynamic: true, name: 'Ghased', store, namespaced: true })
class ConcreteGhasedStore extends VuexModule implements GhasedStore {
  setEnteredChannelRole (channelRole: ChannelRole) {
    Cookies.set('channelRole', channelRole.toString())
  }

  get channelRole (): ChannelRole {
    return Number.parseInt(Cookies.get('channelRole'))
  }
}

export default getModule(ConcreteGhasedStore)
