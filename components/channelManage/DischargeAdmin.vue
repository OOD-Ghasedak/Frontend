<template>
  <b-modal :id="modalId" centered size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text modal-title-warning">
            <center>
              {{ `عزل مدیر ${admin.ghased.full_name}` }}
            </center>
          </h1>
        </div>

        <div class="modal-body-remove-admin">
          <h5 class="no-access-text">
            آیا مطمئن هستید؟
          </h5>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="error-button" @click="discharge">
          <h5>{{ 'عزل' }}</h5>
          <img class="image-sized--2" src="@/static/images/leave-red.svg">
        </button>
      </div>
    </template>
    <template #modal-header-close>
      <div class="close-button">
        <h5 class="close-text">
          انصراف
        </h5>
        <img src="@/static/images/close.svg" alt="" class="close-icon">
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { ChannelAdmin } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class DischargeAdmin extends RootComponent {
  readonly modalId: string = 'discharge-admin'
  show (admin: ChannelAdmin) {
    this.admin = admin
    this.$bvModal.show(this.modalId)
  }

  admin: ChannelAdmin
  discharge () {
    this.mainConfig.$facades.channelOwner.dischargeAdmin(this.admin).then(() => {
      this.$router.go(0)
    })
  }
}
</script>

  <style>
  </style>
