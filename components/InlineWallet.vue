<template>
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
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Money } from '~/models'
import RootComponent from '~/utils/rootComponent'

  @Component
export default class InlineWallet extends RootComponent {
  mounted () {
    this.mainConfig.$facades.wallet.getWallet().then((response) => {
      this.walletBalance = response.balance
    })
  }

  init () {
    this.depositAmount = 0
  }

@Prop() readonly hasEnoughBalanceOutside: (walletBalance: Money) => boolean

get hasEnoughBalance () {
  return this.hasEnoughBalanceOutside(this.walletBalance)
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
