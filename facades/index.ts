import { Plugin } from '@nuxt/types'
import VisitingUser, { concreteVisitingUser } from './visitingUser'
import Wallet, { concreteWallet } from './wallet'
import Ghased, { concreteGhased } from './ghased'
import Subscriber, { concreteSubscriber } from './subscriber'
interface Facades {
  visitingUser: VisitingUser,
  ghased: Ghased,
  wallet: Wallet,
  subscriber: Subscriber
}

const concreteFacades: Facades = {
  visitingUser: concreteVisitingUser,
  ghased: concreteGhased,
  wallet: concreteWallet,
  subscriber: concreteSubscriber
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
