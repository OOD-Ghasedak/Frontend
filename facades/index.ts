import { Plugin } from '@nuxt/types'
import VisitingUser, { concreteVisitingUser } from './visitingUser'
import Wallet, { concreteWallet } from './wallet'
import Ghased, { concreteGhased } from './ghased'
import Subscriber, { concreteSubscriber } from './subscriber'
import ChannelManager, { concreteChannelManager } from './channelManager'
interface Facades {
  visitingUser: VisitingUser,
  ghased: Ghased,
  wallet: Wallet,
  subscriber: Subscriber,
  channelManager: ChannelManager
}

const concreteFacades: Facades = {
  visitingUser: concreteVisitingUser,
  ghased: concreteGhased,
  wallet: concreteWallet,
  subscriber: concreteSubscriber,
  channelManager: concreteChannelManager
}

declare module '@nuxt/types' {
  interface Context {
    $facades: Facades
  }
}

const facadesPlugin: Plugin = (context) => {
  context.$facades = concreteFacades
}

export default facadesPlugin
