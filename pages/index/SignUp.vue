<template>
  <div class="signup">
    <div class="title">
      <h1>ثبت نام</h1>
      <h6>.لطفا اطلاعات زیر را وارد کنید</h6>
    </div>
    <div class="inputs">
      <input v-model="email" placeholder="ایمیل">
      <input v-model="username" placeholder="نام کاربری">
      <input v-model="phoneNumber" placeholder="شماره تلفن">
      <input v-model="password" placeholder="رمز عبور" type="password">
    </div>

    <div class="action">
      <button @click="signup">
        ثبت نام >
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import Vue from 'vue'
import { concreteFacades } from '~/facades'
@Component
export default class SignUp extends Vue {
  email: string = ''
  username: string = ''
  phoneNumber: string = ''
  password: string = ''
  signup () {
    concreteFacades.visitingUser.create_user(this.email, this.username, this.phoneNumber, this.password)
  }
}
</script>

<style>
input, p {
  font-size: 20px;
}

.signup {
  flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 50px max(30px, 5%);
    justify-content: space-between;

}
.signup > .inputs {
  flex-direction: column;
  margin-top: 100px;
}
.signup > .title {
  flex-direction: column;
  text-align: center;
  color: var(--top-color-1);
}

.inputs > input {
  margin-top: 40px;
}

input {
  border: none;
    height: 56px;
    padding: 5px 10px;
    border-bottom: 1px solid;
    outline: none;
    border-color: var(--top-color-1);
    color: var(--top-color-5);
}

.signup > .action {
  justify-content: center;
}

button {
  color: var(--primary-color-1);
  font-size: 41px;
}
</style>
