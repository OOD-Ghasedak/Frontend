import { Store } from 'vuex'

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module 'vuex-module-decorators/dist/types' {
    interface VuexModule {
        store: Store<any>
    }
}
