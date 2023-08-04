<template>
  <div class="signup-complete">
    <BackButton />
    <div class="title">
      <h1>{{ 'تکمیل ثبت‌نام' }}</h1>
      <h3>{{ 'لطفا اطلاعات زیر را وارد کنید.' }}</h3>
    </div>
    <div class="inputs">
      <div class="icon-input">
        <input v-model="username" placeholder="نام کاربری خود را وارد کنید">
        <img src="@/static/images/user.svg">
      </div>
      <div class="icon-input">
        <input v-model="password" placeholder="رمزعبور خود را وارد کنید" type="password">
        <img src="@/static/images/key.svg">
      </div>
    </div>
    <button class="secondary-button" @click="console.log('jesus')">
      <h2>{{ 'تکمیل ثبت‌نام' }}</h2>
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
export default class CompleteSignUpPage extends RootComponent {
  username: string = ''
  password: string = ''

  completeSignUp () {
    this.mainConfig.$facades.visitingUser.signUpComplete(this.username, this.password)
      .then(() => {
        this.$router.push('Login')
      })
  }
}
</script>

<style>
.signup-complete {
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 50px 17%;
}

.signup-complete > .inputs {
  height: 190px;
  justify-content: space-between;
}

.title {
  align-items: center;
}

.inputs {
  width: 100%;
}

</style>
