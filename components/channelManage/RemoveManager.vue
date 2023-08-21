<template>
  <b-modal centered visible size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text modal-title-warning">
            <center>عزل مدیر</center>
          </h1>
        </div>

        <div class="modal-body-remove-admin">
          <h5 class="no-access-text">
            آیا مطمئن هستید؟
          </h5>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="error-button">
          <h5>{{ 'عزل' }}</h5>
          <img class="image-sized--2" src="@/static/images/leave-red.svg">
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
export default class RemoveManager extends Vue {
}
</script>

  <style>
  </style>
