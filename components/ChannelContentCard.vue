<template>
  <div class="channel-content">
    <div class="content-type">
      <img class="image-sized--1" src="@/static/images/channel-content-types/text.svg">
    </div>
    <h5 class="text-centered">
      {{ content.name }}
    </h5>
    <!-- <h6>
          {{ content.summary }}
        </h6> -->
    <h6>
      {{ content.data }}
    </h6>
    <div class="actions row">
      <button class="primary-button">
        <p>{{ 'دانلود سریع' }}</p>
        <img src="@/static/images/download.svg" class="image-sized--2">
      </button>
      <button class="primary-button">
        <p>{{ 'دیدن مطلب...' }}</p>
        <img src="@/static/images/next.svg" class="image-sized--2">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { ChannelContent } from '~/models'

  @Component
export default class ChannelContentCard extends Vue {
      @Prop() readonly content: ChannelContent
}
</script>

<style scoped>
.channel-content {
  position: relative;
  padding: 20px 3% 10px;
  gap: 25px;
  border-bottom: 1px solid var(--top-color-1);
  z-index: 1;
}

.channel-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  z-index: -1;
  background-color: var(--top-color-7);
}

.channel-content > .content-type {
  position: absolute;
  right: 3%;
  top: 10px;
  border-radius: 10px;
  padding: 5px;
  background-color: var(--top-color-7);
}

.channel-content > .actions {
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
