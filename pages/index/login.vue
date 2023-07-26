<template>
  <div class="account-div login">
    <div class="title">
      <h1 class="text-centered">
        ورود
      </h1>
      <p class="text-centered">
        .لطفا اطلاعات زیر را وارد کنید
      </p>
    </div>
    <div class="inputs">
      <input v-model="emailOrUsername" placeholder="ایمیل/نام کاربری">
      <input v-model="password" placeholder="رمز عبور" type="password">
    </div>

    <div class="action">
      <button class="horizontally-centered" @click="login">
        <h2>{{ 'ورود >' }}</h2>
      </button>
    </div>
    <BackButton />
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
export default class Login extends RootComponent {
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
}

</style>
