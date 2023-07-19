<template>
  <div class="main">
    <button @click="ajab" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import Vue from 'vue'
import VisitingUser from '~/store/visitingUser'

@Component
export default class LoginRegister extends Vue {
  ajab () {
    VisitingUser.create_user({ username: 'what?', password: 'zart', email: 'zart' })
  }
}
</script>

<style>
</style>
