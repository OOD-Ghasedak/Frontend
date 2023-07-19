<template>
  <div class="main">
    <button @click="ajab" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import Vue from 'vue'
import VisitingUserStore from '~/store/visitingUser'
import { concreteFacades } from '~/facades'
@Component
export default class LoginRegister extends Vue {
  ajab () {
    VisitingUserStore.SET_NAME('jj')
    concreteFacades.visitingUser.create_user('jesus', 'what?', 'zart')
  }
}
</script>

<style>
</style>
