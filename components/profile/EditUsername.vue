<template>
  <edit-section ref="editSection" @click="editUsername">
    <div class="edit-profile-body">
      <h5>{{ '.نام کاربری جدید را وارد کنید' }}</h5>
      <input v-model="editedUsername">
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
export default class EditUsername extends RootComponent {
  editedUsername: string = ''

  show () {
    // @ts-ignore
    this.$refs.editSection.show()
  }

  editUsername () {
    this.mainConfig.$facades.ghased.editProfile({ username: this.editedUsername })
  }
}
</script>

<style>
</style>
