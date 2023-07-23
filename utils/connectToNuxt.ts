export class OutsideVueComponent {
  protected get $CurrentNuxtInstance () {
    return window.$nuxt
  }
}
