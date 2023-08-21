<template>
  <div class="premium-sign row">
    <img class="image-sized--1" src="@/static/images/dollar-green.svg">
    <p class="text-centered">
      {{ 'محتوای پولی' }}
    </p>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

  @Component
export default class PremiumSign extends Vue {
}
</script>

<style>
.premium-sign {
width: fit-content;
  align-items: center;
  gap: 5px;
  flex-wrap: nowrap;
  padding: 4px 6px;
  border-radius: 10px;
  background-color: var(--secondary-color-7);
}
.premium-sign > p {
  width: min-content;
    line-height: 1;
}
</style>
