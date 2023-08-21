<template>
  <b-modal centered visible size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text">
            <center>خرید محتوا</center>
          </h1>
          <h6>صدای هنرمندان فاخر</h6>
        </div>

        <div class="modal-body-buy-content">
          <div class="price-content">
            <h4>۴۰۰۰۰۰۰</h4>
            <p class="sub-item-months">
              تومان
            </p>
          </div>

          <div class="wallet-pane">
            <div class="wallet-pane-header">
              <h6 class="wallet-text">
                کیف<br>پول
              </h6>
              <div class="wallet-balance">
                <h4 class="balance-text">
                  موجودی
                </h4>
                <p>۲۰۰۰۰۰۰تومان</p>
              </div>
              <img src="@/static/images/wallet.svg" alt="" class="wallet-icon">
            </div>
            <div class="wallet-pane-note">
              <p>موجودی کافی</p>

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
                <input type="number" placeholder="مقدار" class="deposit-input">
              </div>

              <div class="depost-button-div">
                <button class="deposit-button">
                  <h3 class="secondary">
                    {{ 'واریز' }}
                  </h3>
                  <img src="@/static/images/arrow-down.svg">
                </button>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="edit secondary-button-2">
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
import RootComponent from '~/utils/rootComponent'

  @Component
export default class BuyContent extends RootComponent {
}
</script>

<style>
</style>
