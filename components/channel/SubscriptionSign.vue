<template>
  <div class="subscription-sign row">
    <img src="@/static/images/dollar.svg" class="image-sized--2">
    <h6>{{ 'اشتراکی' }}</h6>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

    @Component
export default class SubscriptionSign extends Vue {
}
</script>

<style>
.subscription-sign {
border-radius: 10px;
background-color: var(--secondary-color-6);
padding: 7px 5px;
}
</style>
