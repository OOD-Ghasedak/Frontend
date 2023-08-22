<template>
  <edit-section id="change-password" ref="editSection" @click="edit">
    <div class="edit-profile-body">
      <h5>{{ '.رمز عبور قدیمی را وارد کنید' }}</h5>
      <input v-model="oldPassword" type="password">
      <h5>{{ '.رمز عبور جدید را وارد کنید' }}</h5>
      <input v-model="newPassword" type="password">
      <h5>{{ '.رمز عبور جدید را دوباره وارد کنید' }}</h5>
      <input v-model="repeatNewPassword" type="password">
    </div>
  </edit-section>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import EditSection from './EditSection.vue'
import RootComponent from '~/utils/rootComponent'

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
    this.mainConfig.$facades.ghased.changePassword(this.oldPassword, this.newPassword, this.repeatNewPassword).then(() => {
      this.$router.go(0)
    })
  }
}
</script>

  <style>
  </style>
