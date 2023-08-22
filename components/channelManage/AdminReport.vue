<template>
  <b-modal :id="modalId" centered hide-footer size="lg" class="buy-sub">
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
            پست‌های نوشته شده
          </h4>
          <p class="number-of-posts-written">
            ۲۵
          </p>
        </div>
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
import Vue from 'vue'
import { ChannelAdmin } from '~/models'

@Component
export default class AdminReport extends Vue {
  readonly modalId: string = 'admin-report'
  show (admin: ChannelAdmin) {
    this.admin = admin
    this.$bvModal.show(this.modalId)
  }

  admin: ChannelAdmin
  report
}
</script>

<style>
</style>
