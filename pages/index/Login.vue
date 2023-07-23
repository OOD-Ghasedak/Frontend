<template>
  <div class="account-div login">
    <div class="title">
      <h1>ورود</h1>
      <h6>.لطفا اطلاعات زیر را وارد کنید</h6>
    </div>
    <div class="inputs">
      <input v-model="emailOrUsername" placeholder="ایمیل/نام کاربری">
      <input v-model="password" placeholder="رمز عبور" type="password">
    </div>

    <div class="action">
      <button @click="login">
        ورود >
      </button>
    </div>
    <button class="back-button">
      بازگشت >
    </button>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import Vue from 'vue'
import { concreteFacades } from '~/facades'
  @Component
export default class Login extends Vue {
  emailOrUsername: string = ''
  password: string = ''
  login () {
    concreteFacades.visitingUser.login(this.emailOrUsername, this.password)
  }
}
</script>

<style>
.login > .inputs {
    height: 200px;
}

</style>
