<template>
  <b-modal centered visible size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text modal-title-warning">
            <center>عدم دسترسی!</center>
          </h1>
        </div>

        <div class="modal-body-no-access">
          <h5 class="no-access-text">
            شما به این محتوا دسترسی ندارید.
            می‌توانید با خرید اشتراک یا
            خرید محتوا به صورت جداگانه،
            به این محتوا دسترسی پیدا کنید.
          </h5>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="edit secondary-button-2">
          <h6>{{ ' خرید محتوا' }}</h6>
          <img class="image-sized--1" src="@/static/images/paper-money.svg">
        </button>
        <button class="edit secondary-button-2">
          <h6>{{ ' خرید اشتراک' }}</h6>
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
export default class NoAccess extends RootComponent {
}
</script>

  <style>
  </style>
