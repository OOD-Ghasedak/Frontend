<template>
  <b-modal centered hide-footer visible size="lg" class="buy-sub">
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

@Component
export default class AdminReport extends Vue {
}
</script>

<style>
</style>
