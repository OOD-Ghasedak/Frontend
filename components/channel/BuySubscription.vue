<template>
  <b-modal :id="modalId" centered size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text">
            <center>خرید اشتراک</center>
          </h1>
        </div>

        <div class="modal-body-me">
          <inline-wallet :ref="inlineWalletRefId" :has-enough-balance-outside="hasEnoughBalance" />

          <div class="subs">
            <div v-for="(subscription, i) in subscriptions" :key="`subscription-${i}`" class="sub-item-box" :active="i === selectedSubscriptionIndex ? 'true' : 'false'" @click="selectedSubscriptionIndex = i">
              <div class="sub-item-title">
                <h3 class="sub-item-month-number">
                  {{ subscriptionLengthRepresentation(subscription) }}
                </h3>
                <h6 class="sub-item-months">
                  ماهه
                </h6>
              </div>
              <div class="sub-item-price">
                <h3 class="sub-item-price-number">
                  {{ subscription.price }}
                </h3>
                <p class="sub-item-toman">
                  تومان
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="edit secondary-button-2" @click="buySubscription">
          <h6>{{ 'خرید اشتراک' }}</h6>
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
import InlineWallet from '../InlineWallet.vue'
import RootComponent from '~/utils/rootComponent'
import { Money, Subscription, subscriptionLengthNumbers, SubscriptionModel } from '~/models'

  @Component({
    components: {
      InlineWallet
    }
  })
export default class BuySubscription extends RootComponent {
  readonly modalId: string = 'change-bio'
  readonly inlineWalletRefId: string = 'inline-wallet'

  show () {
    this.selectedSubscriptionIndex = 0
    this.$bvModal.show(this.modalId)
    // console.log(this.$refs[this.inlineWalletRefId])
    // // @ts-ignore
    // this.$refs[this.inlineWalletRefId].init()
  }

  get channelId () {
    return this.$route.params.channel_id
  }

  subscriptions: Subscription[] = []
  subscriptionLengthRepresentation (subscription: SubscriptionModel) {
    return subscriptionLengthNumbers[subscription.duration_choice]
  }

  selectedSubscriptionIndex: number = 0
  get hasSelectedASubscription () {
    return this.selectedSubscriptionIndex < this.subscriptions.length
  }

  get selectedSubscriptionId () {
    return this.subscriptions[this.selectedSubscriptionIndex].id
  }

  hasEnoughBalance (walletBalance: Money) {
    return !this.hasSelectedASubscription || this.subscriptions[this.selectedSubscriptionIndex].price <= walletBalance
  }

  buySubscription () {
    this.mainConfig.$facades.subscriber.buySubscription(this.selectedSubscriptionId).then(() => {
      this.$router.go(0)
    })
  }

  mounted () {
    this.mainConfig.$facades.subscriber.getChannelSubscriptions(this.channelId).then((response) => {
      this.subscriptions = response
    })
  }
}
</script>

  <style>
  </style>
