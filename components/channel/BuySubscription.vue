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
          <div class="wallet-pane">
            <div class="wallet-pane-header">
              <h6 class="wallet-text">
                کیف<br>پول
              </h6>
              <div class="wallet-balance">
                <h4 class="balance-text">
                  موجودی
                </h4>
                <p>{{ `${walletBalance} تومان` }}</p>
              </div>
              <img src="@/static/images/wallet.svg" alt="" class="wallet-icon">
            </div>
            <div class="wallet-pane-note">
              <p>
                {{ `موجودی ${hasEnoughBalance ? '' : 'نا'}کافی` }}
              </p>

              <h4 class="trans-text">
                عملیات
              </h4>
              <a href="" />
              <b-button v-b-toggle.collapse-wallet class="expand-button" style="padding: 5px;">
                <img src="@/static/images/double-arrow-down.svg" alt="" class="down-icon">
              </b-button>
            </div>
            <b-collapse id="collapse-wallet">
              <div class="input-div">
                <input v-model="depositAmount" type="number" placeholder="مقدار" class="deposit-input">
              </div>

              <div class="depost-button-div">
                <button class="deposit-button" @click="deposit">
                  <h3 class="secondary">
                    {{ 'واریز' }}
                  </h3>
                  <img src="@/static/images/arrow-down.svg">
                </button>
              </div>
            </b-collapse>
          </div>

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
import RootComponent from '~/utils/rootComponent'
import { Money, Subscription, subscriptionLengthNumbers, SubscriptionModel } from '~/models'

  @Component
export default class BuySubscription extends RootComponent {
  readonly modalId: string = 'change-bio'
  show () {
    this.selectedSubscriptionIndex = 0
    this.depositAmount = 0
    this.$bvModal.show(this.modalId)
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

  get hasEnoughBalance () {
    return !this.hasSelectedASubscription || this.subscriptions[this.selectedSubscriptionIndex].price <= this.walletBalance
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
    this.mainConfig.$facades.wallet.getWallet().then((response) => {
      this.walletBalance = response.balance
    })
  }

  walletBalance: Money = 0
  depositAmount: Money = 0
  deposit () {
    this.mainConfig.$facades.wallet.deposit(this.depositAmount).then(() => {
      this.walletBalance += this.depositAmount
      this.depositAmount = 0
    })
  }
}
</script>

  <style>
  </style>
