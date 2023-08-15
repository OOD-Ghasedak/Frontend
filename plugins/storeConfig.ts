import { Plugin } from '@nuxt/types'
import concreteMainStore, { MainStore } from '~/store/main'
import concreteVisitingUserStore, { VisitingUserStore } from '~/store/visitingUser'
import concreteGhasedStore, { GhasedStore } from '~/store/ghased'
interface Stores {
  main: MainStore
  visitingUser: VisitingUserStore
  ghased: GhasedStore
}

const concreteStores: Stores = {
  main: concreteMainStore,
  visitingUser: concreteVisitingUserStore,
  ghased: concreteGhasedStore
}

declare module '@nuxt/types' {
  interface Context {
    $stores: Stores
  }
}

const facadesPlugin: Plugin = (context) => {
  context.$stores = concreteStores
}

export default facadesPlugin
