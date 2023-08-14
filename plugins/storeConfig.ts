import { Plugin } from '@nuxt/types'
import concreteGhasedStore, { GhasedStore } from '~/store/ghased'
import concreteVisitingUserStore, { VisitingUserStore } from '~/store/visitingUser'
interface Stores {
    visitingUser: VisitingUserStore
    ghased: GhasedStore
}

const concreteStores: Stores = {
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
