<template>
  <div class="account-div signup">
    <BackButton />

    <div class="title">
      <h1 class="text-centered">
        {{ 'ثبت نام' }}
      </h1>
      <p class="text-centered">
        {{ '.لطفا اطلاعات زیر را وارد کنید' }}
      </p>
    </div>
    <div class="icon-input">
      <input v-model="emailOrPhoneNumber" placeholder="ایمیل/شماره‌تلفن خود را وارد کنید...">
      <img src="@/static/images/email.svg">
    </div>

    <button class="secondary-button horizontally-centered" @click="signup">
      <h2>{{ 'ثبت نام' }}</h2>
    </button>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import BackButton from '~/components/BackButton.vue'
import RootComponent from '~/utils/rootComponent'
@Component({
  components: { BackButton }
})
export default class SignUpPage extends RootComponent {
  emailOrPhoneNumber: string = ''
  signup () {
    // const phoneNumber = this.$options.filters.toPersianDigits(this.emailOrPhoneNumber)
    const phoneNumber = this.emailOrPhoneNumber
    this.mainConfig.$facades.visitingUser.signUp(phoneNumber)
      .then(() => {
        this.$router.push({ name: 'ConfirmSignUpPage' })
      })
      .catch((error: string) => {
        this.$nuxt.showError(error)
      })
  }
}
</script>

<router>
  {name: 'SignUpPage'}
</router>

<style>
.account-div {
  height: 100%;
  padding: 50px max(30px, 5%);
  justify-content: space-between;
}
</style>
