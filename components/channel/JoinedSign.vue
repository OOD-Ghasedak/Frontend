<template>
  <div class="joined-sign row">
    <h6>{{ 'عضوشده' }}</h6>
    <img class="image-sized--2" src="@/static/images/joined-channel.svg">
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

    @Component
export default class JoinedSign extends Vue {
}
</script>

<style scoped>
.joined-sign {
  background-color: var(--secondary-color-6);
  padding: 3px 1rem 3px 3px;
  border-radius: 10px;
  gap: 1rem;
  height: fit-content;
}
</style>
