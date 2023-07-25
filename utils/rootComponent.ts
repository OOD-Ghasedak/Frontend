import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class RootComponent extends Vue {
  get mainConfig () {
    return this.$nuxt.context
  }
}
