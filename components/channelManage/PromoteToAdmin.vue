<template>
  <b-modal centered visible size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main promote-to-admin-main">
        <div class="content row">
          <img src="@/static/images/ghased.svg" class="image-sized-1">
          <div class="names">
            <h5>hi</h5>
            <h6>@hello</h6>
          </div>
        </div>

        <div class="profit-part">
          <h4 class="profit-text">
            عواید
          </h4>
          <input type="number" name="profit" placeholder="درصد عواید" class="profit-input">
          <p>درصد</p>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="primary-button">
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
import Vue from 'vue'

@Component
export default class PromoteToAdmin extends Vue {
}
</script>

  <style>
  </style>
