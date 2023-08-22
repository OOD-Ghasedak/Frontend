<template>
  <b-modal :id="modalId" centered size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text">
            <center>خرید محتوا</center>
          </h1>
          <h6>{{ content.title }}</h6>
        </div>

        <div class="modal-body-buy-content">
          <div class="price-content">
            <h4>{{ content.price }}</h4>
            <p class="sub-item-months">
              تومان
            </p>
          </div>

          <inline-wallet :has-enough-balance-outside="hasBalance" />
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="edit secondary-button-2" @click="buy">
          <h6>{{ ' خرید محتوا' }}</h6>
          <img class="image-sized--1" src="@/static/images/paper-money.svg">
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
import { Prop } from 'vue-property-decorator'
import InlineWallet from '../InlineWallet.vue'
import { ChannelContent, Money } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: {
    InlineWallet
  }
})
export default class BuyContent extends RootComponent {
  readonly modalId: string = 'buy-content'
  show () {
    this.$bvModal.show(this.modalId)
  }

  get channelId () {
    return this.$route.params.channel_id
  }

  get contentId (): string {
    return this.content.id
  }

  @Prop() readonly content: ChannelContent
  hasBalance (walletBalance: Money) {
    return this.content.price <= walletBalance
  }

  buy () {
    this.mainConfig.$facades.subscriber.buyContent(this.contentId).then(() => {
      this.$router.go(0)
    })
  }
}
</script>

  <style>
  </style>
