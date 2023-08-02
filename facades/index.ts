import { Plugin } from '@nuxt/types'
import Ghased, { concreteGhased } from './ghased'
import VisitingUser, { concreteVisitingUser } from './visitingUser'
import Wallet, { concreteWallet } from './wallet'
interface Facades {
  visitingUser: VisitingUser,
  ghased: Ghased,
  wallet: Wallet
}

const concreteFacades: Facades = {
  visitingUser: concreteVisitingUser,
  ghased: concreteGhased,
  wallet: concreteWallet
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
