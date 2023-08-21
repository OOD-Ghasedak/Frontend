<template>
  <edit-section ref="editSection" @click="edit">
    <div class="edit-profile-body">
      <h5>{{ '.رمز عبور قدیمی را وارد کنید' }}</h5>
      <input v-model="oldPassword">
      <h5>{{ '.رمز عبور جدید را وارد کنید' }}</h5>
      <input v-model="newPassword">
      <h5>{{ '.رمز عبور جدید را دوباره وارد کنید' }}</h5>
      <input v-model="repeatNewPassword">
    </div>
  </edit-section>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import EditSection from './EditSection.vue'
import RootComponent from '~/utils/rootComponent'
import { phoneNumberOrEmailValidator } from '~/utils/phoneNumberValidator'

  @Component({
    components: { EditSection }
  })
export default class ChangePassword extends RootComponent {
  oldPassword: string = ''
  newPassword: string = ''
  repeatNewPassword: string = ''

  show () {
    // @ts-ignore
    this.$refs.editSection.show()
  }

  edit () {
    if (this.newPassword === this.repeatNewPassword) {
      this.mainConfig.$facades.ghased.changePassword(this.oldPassword, this.newPassword).then(() => {
        this.$router.go(0)
      })
    }
  }
}
</script>

  <style>
  </style>
