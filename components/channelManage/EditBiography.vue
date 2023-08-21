<template>
  <b-modal centered visible size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text">
            <center>بیوگرافی کانال</center>
          </h1>
          <h6 class="title-description">
            بیوگرافی جدید را وارد کنید.
          </h6>
        </div>

        <div class="modal-body-change-bio">
          <img src="@/static/images/paragraph.svg" alt="" class="paragraph-icon">
          <textarea placeholder="بیوگرافی" class="bio-input" />
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="primary-button">
          <h5>{{ 'تغییر بیوگرافی' }}</h5>
          <img src="@/static/images/change-bio.svg" class="image-sized--2">
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
export default class EditBiography extends RootComponent {
}
</script>

<style>
</style>
