import { NuxtApp } from '@nuxt/types/app'

export class OutsideVueComponent {
  protected get $CurrentNuxtInstance (): NuxtApp {
    return window.$nuxt
  }

  protected get mainConfig () {
    return this.$CurrentNuxtInstance.context
  }
}
