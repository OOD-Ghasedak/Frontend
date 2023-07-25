import { Plugin } from '@nuxt/types'
import Ghased, { concreteGhased } from './ghased'
import VisitingUser, { concreteVisitingUser } from './visitingUser'
interface Facades {
  visitingUser: VisitingUser,
  ghased: Ghased
}

const concreteFacades: Facades = {
  visitingUser: concreteVisitingUser,
  ghased: concreteGhased
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
