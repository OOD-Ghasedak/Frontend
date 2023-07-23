export class OutsideVueComponent {
  get $CurrentNuxtInstance () {
    return window.$nuxt
  }
}
