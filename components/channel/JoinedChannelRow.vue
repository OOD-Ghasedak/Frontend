<template>
  <div class="channel row">
    <div class="right row">
      <img class="image-sized-3 circular" src="@/static/images/ghased.svg">
      <div class="text">
        <div class="name row">
          <h3>{{ channel.name }}</h3>
          <!-- <subscription-sign v-if="channel.has_subscription" /> -->
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
      <channel-role-component :role="channelRole" />
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
import JoinedSign from './JoinedSign.vue'
import JoinSign from './JoinSign.vue'
import SubscriptionSign from './SubscriptionSign.vue'
import { ChannelRole, ChannelRolesProps } from '~/models'

  interface JoinedChannel {
        'id': string;
        'subscriber_id': number,
        'is_premium': boolean,
        'name': string,
        'description': string
    }

    @Component({
      components: {
        JoinedSign,
        SubscriptionSign,
        JoinSign
      }
    })
export default class JoinedChannelRow extends Vue {
  get roleProps () {
    return ChannelRolesProps[this.channelRole]
  }

        @Prop() readonly channel: JoinedChannel
        get channelRole () {
          return this.channel.subscriber_id === -1 ? ChannelRole.MEMBER : ChannelRole.SPECIAL_MEMBER
        }
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
