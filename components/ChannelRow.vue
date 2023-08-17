<template>
  <div class="channel row">
    <div class="content row">
      <img class="image-sized-3 circular" src="@/static/images/ghased.svg">
      <div class="text">
        <h3 class="name">
          {{ channel.name }}
        </h3>
        <p class="description">
          {{ channel.description }}
        </p>
      </div>
    </div>
    <slot />
    <nuxt-link :to="{name: 'ChannelPage', params: {channel_id: channel.id}}" class="visit-button secondary-button">
      <h5>{{ 'مشاهده کانال' }}</h5>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { Channel } from '~/models'
@Component
export default class ChannelRow extends Vue {
    @Prop() readonly channel: Channel
}
</script>

<style>
.channel {
  height: 170px;
  align-items: center;
  justify-content: space-around;
}
.channel > .content > .text {
  justify-content: center;
  margin-right: 10px;
}
</style>
