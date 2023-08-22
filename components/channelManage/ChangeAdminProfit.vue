<template>
  <b-modal :id="modalId" centered size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main promote-to-admin-main">
        <div class="content row">
          <img src="@/static/images/ghased.svg" class="image-sized-1">
          <div class="names">
            <h5>{{ admin.ghased.full_name }}</h5>
            <h6>{{ `@${admin.ghased.username}` }}</h6>
          </div>
        </div>

        <div class="profit-part">
          <h4 class="profit-text">
            عواید
          </h4>
          <input v-model="newShare" type="number" name="profit" placeholder="درصد عواید" class="profit-input">
          <p>درصد</p>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="primary-button" @click="changeProfit">
          <h5>{{ 'تغییر درصد' }}</h5>
          <img src="@/static/images/exchange.svg" class="image-sized--2">
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
export default class ChangeAdminProfit extends RootComponent {
  readonly modalId: string = 'change-admin-profit'
  show (admin: ChannelAdmin) {
    this.admin = admin
    this.newShare = admin.share
    this.$bvModal.show(this.modalId)
  }

  get channelId () {
    return this.$route.params.channel_id
  }

  admin: ChannelAdmin
  newShare: number
  changeProfit () {
    this.mainConfig.$facades.channelOwner.setSharePercent(this.admin, this.newShare).then(() => {
      this.$router.go(0)
    })
  }
}
</script>

  <style>
  </style>
