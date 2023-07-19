import Vuex, { Store } from 'vuex'
import { vuexCookiePersistence } from '~/utils/vuexCookiePersistence'

export const plugins = [vuexCookiePersistence.plugin]

interface RootState {}
export const store = new Vuex.Store<RootState>({
  actions: {
    nuxtServerInit: () => {
      console.log('Hello nuxtServerInit')
    }
  }
})

const createStore = (): Store<RootState> => {
  return store
}

export default createStore
