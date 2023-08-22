<template>
  <b-modal :id="modalId" centered size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main promote-to-admin-main">
        <div class="content row">
          <img src="@/static/images/ghased.svg" class="image-sized-1">
          <div class="names">
            <h5>{{ member.ghased.full_name }}</h5>
            <h6>{{ `@${member.ghased.username}` }}</h6>
          </div>
        </div>

        <div class="profit-part">
          <h4 class="profit-text">
            عواید
          </h4>
          <input v-model="share" type="number" name="profit" placeholder="درصد عواید" class="profit-input">
          <p>درصد</p>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="primary-button" @click="promote">
          <h5>{{ 'ارتقا به مدیر کانال' }}</h5>
          <img class="image-sized--2" src="@/static/images/channel-roles/admin.svg">
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
import { ChannelMember } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class PromoteToAdmin extends RootComponent {
  readonly modalId: string = 'promote-to-admin'
  show (member: ChannelMember) {
    this.member = member
    this.$bvModal.show(this.modalId)
  }

  member: ChannelMember
  share: number = 0
  promote () {
    this.mainConfig.$facades.channelOwner.promoteMemberToAdmin(this.channelId, this.member, this.share).then(() => {
      this.$router.go(0)
    })
  }

  get channelId () {
    return this.$route.params.channel_id
  }
}
</script>

  <style>
  </style>
