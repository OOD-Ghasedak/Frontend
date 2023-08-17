<template>
  <div class="channel-page">
    <div class="header row">
      <div class="right row">
        <img class="circular image-sized-3" src="@/static/images/ghased.svg">
        <nuxt-link v-if="channelRoleProps.canAddContent" :to="{name: 'ChannelAddContentPage'}" custom>
          <div class="the-link">
            <button class="horizontally-centered circular image-sized-1">
              <img class="image-sized--1" src="@/static/images/plus.svg">
            </button>
            <h6>{{ 'افزودن محتوا' }}</h6>
          </div>
        </nuxt-link>
        <nuxt-link v-if="channelRoleProps.canManageChannel" :to="{name: 'ChannelManagePage'}" custom>
          <div class="the-link">
            <button class="horizontally-centered circular image-sized-1">
              <img class="image-sized--1" src="@/static/images/info.svg">
            </button>
            <h6>{{ 'مدیریت کانال' }}</h6>
          </div>
        </nuxt-link>
      </div>
      <div class="center">
        <h1>{{ channel.name }}</h1>
        <channel-role-component :role="channelRole" />
        <button v-if="channelRoleProps.canLeaveChannel" class="leave-group-button" @click="leaveChannel">
          <h6>{{ 'خروج از کانال...' }}</h6>
          <img class="image-sized--1" src="@/static/images/leave-group.svg">
        </button>
        <div class="channel-type row">
          <img src="@/static/images/dollar.svg" class="image-sized--2">
          <h6>{{ 'اشتراکی' }}</h6>
        </div>
        <div v-if="channelRoleProps.canLeaveChannel" class="joined-channel row">
          <h6>{{ 'عضوشده' }}</h6>
          <img class="image-sized--2" src="@/static/images/joined-channel.svg">
        </div>
      </div>
      <back-button />
    </div>
    <div class="contents responsive-grid">
      <channel-content-card v-for="(content, i) in contents" :key="`content-${i}`" :content="content" />
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Channel, ChannelContent, ChannelContentType, ChannelRole, ChannelRolesProps } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelPage extends RootComponent {
  channelRole: ChannelRole = ChannelRole.ADMIN

  get channelRoleProps () {
    return ChannelRolesProps[this.channelRole]
  }

  channel: Channel = { id: '2', name: 'mofo', description: 'this channel is about mofos' }
  contents: ChannelContent[] = [
    {
      id: '0',
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا',
      is_monetary: true
    },
    {
      id: '1',
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا',
      is_monetary: false
    },
    {
      id: '2',
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا',
      is_monetary: true
    }
  ]

  get channelId (): string {
    return this.$route.params.channel_id || '4568'
  }

  leaveChannel () {
    // todo
  }

  mounted () {
    // todo
    // enter channel
    // get channel
    // get contents
  }
}
</script>
<router>
  {name: "ChannelPage"}
</router>

<style>
.channel-page {
  height: 100%;
  padding: 20px 3%;
  gap: 20px;
}

.channel-page > .header {
  justify-content: space-between;
  align-items: center;
}

.channel-page > .header > .back-button {
  position: initial;
  height: fit-content;
}

.channel-page > .header > .center {
  position: relative;
  align-items: center;
}

.channel-page > .header > .center > .channel-type {
  position: absolute;
  right: -85px;
  top: 4px;
  border-radius: 10px;
  background-color: var(--secondary-color-6);
  padding: 7px 5px;
}

.channel-page > .header > .center > .joined-channel {
  position: absolute;
  left: -125px;
  top: 5px;
  background-color: var(--secondary-color-6);
  padding: 3px 1rem 3px 3px;
  border-radius: 10px;
  gap: 1rem;
}

.channel-page > .header > .center > .leave-group-button {
  background-color: var(--error-color-2);
  border-radius: 10px;
  padding: 5px 1rem;
  align-items: center;
  gap: 0.8rem;
  margin-top: 10px;
}

.leave-group-button > h6 {
  color: var(--error-color);
}

.channel-page > .header > .right {
  gap: 10px;
}

.channel-page > .header > .right > a {
  display: flex;
  justify-content: center;
}

.channel-page > .header > .right .the-link {
  justify-content: center;
}

.channel-page > .header > .right .the-link > button {
  justify-content: center;
  margin-bottom: 5px;
  background-color: var(--top-color-3);
  padding: 0;
}
.channel-page > .header > .right .the-link > button > img {
  margin: auto;
}

.channel-page > .contents {
  --item-min-width: 300px;
}

</style>
