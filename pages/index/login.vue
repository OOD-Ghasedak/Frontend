<template>
  <div class="account-div login">
    <BackButton />

    <div class="title">
      <h1 class="text-centered">
        {{ 'ورود' }}
      </h1>
      <p class="text-centered">
        {{ '.لطفا اطلاعات زیر را وارد کنید' }}
      </p>
    </div>
    <div class="inputs">
      <div class="icon-input">
        <input v-model="emailOrUsername" placeholder="ایمیل/نام کاربری خود را وارد کنید...">
        <img src="@/static/images/atsign.svg">
      </div>
      <div class="icon-input">
        <input v-model="password" placeholder="رمز عبور خود را وارد کنید..." type="password">
        <img src="@/static/images/key.svg">
      </div>
    </div>
    <button class="secondary-button horizontally-centered" @click="login">
      <h2>{{ 'ورود' }}</h2>
    </button>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import BackButton from '~/components/BackButton.vue'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: {
    BackButton
  }
})
export default class LoginPage extends RootComponent {
  emailOrUsername: string = ''
  password: string = ''
  login () {
    this.mainConfig.$facades.visitingUser.login(this.emailOrUsername, this.password)
      .then(() => { this.$router.push({ path: '/home/' }) })
      .catch(() => {
        this.$nuxt.showError('error')
      })
  }
}
</script>

<style>
.login > .inputs {
    height: 200px;
    justify-content: space-between;
}

.account-div {
  height: 100%;
  padding: 50px max(30px, 5%);
  justify-content: space-between;
}
</style>
