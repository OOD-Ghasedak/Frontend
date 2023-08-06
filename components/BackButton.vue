<template>
  <button class="back-button" @click="back">
    <h3>{{ 'بازگشت' }}</h3>
    <img src="@/static/images/back.svg" class="image-sized--1">
  </button>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class BackButton extends Vue {
  back () {
    this.$router.back()
  }
}
</script>

<style>
.back-button {
    font-size: 28px;
    color: var(--top-color-4);
}

.back-button {
  display: flex;
  border-width: 0;
  background: transparent;
}

.back-button {
    position: absolute;
    left: 30px;
    top: 50px;
}

.back-button > h3 {
  color: var(--top-color-4);
}

.back-button > img {
  margin-right: 5px;
}
</style>
