<template>
  <div class="account-div signup">
    <div class="title">
      <h1 class="text-centered">
        ثبت نام
      </h1>
      <p class="text-centered">
        .لطفا اطلاعات زیر را وارد کنید
      </p>
    </div>
    <div class="inputs">
      <input v-model="email" placeholder="ایمیل">
      <input v-model="username" placeholder="نام کاربری">
      <input v-model="phoneNumber" placeholder="شماره تلفن">
      <input v-model="password" placeholder="رمز عبور" type="password">
    </div>

    <div class="action">
      <button class="horizontally-centered" @click="signup">
        <h2>{{ 'ثبت نام >' }}</h2>
      </button>
    </div>
    <BackButton />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import Vue from 'vue'
import { concreteFacades } from '~/facades'
import BackButton from '~/components/BackButton.vue'
@Component({
  components: { BackButton }
})
export default class SignUp extends Vue {
  email: string = ''
  username: string = ''
  phoneNumber: string = ''
  password: string = ''
  signup () {
    concreteFacades.visitingUser.create_user(this.email, this.username, this.phoneNumber, this.password)
      .then(() => {
        this.$router.push({ path: '/login' })
      })
      .catch((error: string) => {
        this.$nuxt.showError(error)
      })
  }
}
</script>

<style>

</style>
