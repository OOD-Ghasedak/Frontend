import { Plugin } from '@nuxt/types'
import concreteVisitingUserStore, { VisitingUserStore } from '~/store/visitingUser'
interface Stores {
    visitingUser: VisitingUserStore
}

const concreteStores: Stores = {
  visitingUser: concreteVisitingUserStore
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
