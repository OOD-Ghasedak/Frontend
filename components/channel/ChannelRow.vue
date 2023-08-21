<template>
  <div class="channel row">
    <div class="right row">
      <img class="image-sized-3 circular" src="@/static/images/ghased.svg">
      <div class="text">
        <div class="name row">
          <h3>{{ channel.name }}</h3>
          <subscription-sign v-if="channel.has_subscription" />
        </div>
        <div class="description row">
          <img class="image-sized--1" src="@/static/images/paper.svg">
          <h6 class="description">
            {{ channel.description }}
          </h6>
        </div>
      </div>
    </div>
    <div class="left row">
      <channel-role-component :role="channel.role" />
      <joined-sign v-if="roleProps.canLeaveChannel" />
      <join-sign v-else-if="roleProps.canJoinChannel" :channel-id="channel.id" />
      <nuxt-link :to="{name: 'ChannelPage', params: {channel_id: channel.id}}" class="visit-button secondary-button">
        <h5>{{ 'مشاهده کانال' }}</h5>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { Channel, ChannelRolesProps } from '~/models'
@Component
export default class ChannelRow extends Vue {
  get roleProps () {
    return ChannelRolesProps[this.channel.role]
  }

    @Prop() readonly channel: Channel
}
</script>

<style scoped>
.channel {
  height: 170px;
  align-items: center;
  justify-content: space-between;
  padding-right: 5%;
}
.channel > .right > .text {
  justify-content: center;
  margin-right: 10px;
}

.channel .description {
  gap: 1rem;
  align-items: center;
}
.channel .text {
  gap: 1rem;
}
.channel .name {
  gap: 1rem;
}

.channel > .left {
  gap: 2rem;
  align-items: center;
}

.channel .visit-button > h5 {
  width: min-content;
  text-align: center;
}
</style>
