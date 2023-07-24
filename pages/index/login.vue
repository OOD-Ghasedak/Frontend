<template>
  <div class="account-div login">
    <div class="title">
      <h1>ورود</h1>
      <p>.لطفا اطلاعات زیر را وارد کنید</p>
    </div>
    <div class="inputs">
      <input v-model="emailOrUsername" placeholder="ایمیل/نام کاربری">
      <input v-model="password" placeholder="رمز عبور" type="password">
    </div>

    <div class="action">
      <button @click="login">
        <h2>{{ 'ورود >' }}</h2>
      </button>
    </div>
    <BackButton />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import BackButton from '~/components/BackButton.vue'
import { concreteFacades } from '~/facades'

@Component({
  components: {
    BackButton
  }
})
export default class Login extends Vue {
  emailOrUsername: string = ''
  password: string = ''
  login () {
    concreteFacades.visitingUser.login(this.emailOrUsername, this.password).catch(() => {
      this.$nuxt.showError('error')
    })
  }
}
</script>

<style>
.login > .inputs {
    height: 200px;
}

</style>
