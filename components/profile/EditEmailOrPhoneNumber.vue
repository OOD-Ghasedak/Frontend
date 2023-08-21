<template>
  <edit-section ref="editSection" @click="edit">
    <div class="edit-profile-body">
      <h5>{{ '.ایمیل/شماره‌تلفن جدید را وارد کنید' }}</h5>
      <input v-model="editedEmailOrPhoneNumber">
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
export default class EditEmailOrPhoneNumber extends RootComponent {
  editedEmailOrPhoneNumber: string = ''

  show () {
    // @ts-ignore
    this.$refs.editSection.show()
  }

  edit () {
    phoneNumberOrEmailValidator.validateSignUpInput(this.editedEmailOrPhoneNumber).then((validatedData) => {
      this.mainConfig.$facades.ghased.editProfile(validatedData)
    }).then(() => { this.$router.go(0) })
  }
}
</script>

<style>
</style>
