<template>
  <div class="channel-page">
    <div class="header row">
      <img class="circular image-sized-3" src="@/static/images/ghased.svg">
      <div class="title">
        <h1>{{ channel.name }}</h1>
        <channel-role-component />
        <div class="channel-type row">
          <img src="@/static/images/dollar.svg" class="image-sized--2">
          <h6>{{ 'اشتراکی' }}</h6>
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
import { Channel, ChannelContent, ChannelContentType } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelPage extends RootComponent {
  channel: Channel = { id: '2', name: 'mofo', description: 'this channel is about mofos' }
  contents: ChannelContent[] = [
    {
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا',
      is_monetary: true
    },
    {
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا',
      is_monetary: false
    },
    {
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا',
      is_monetary: true
    }
  ]

  get channelId (): string {
    return this.$route.params.id || '4568'
  }

  mounted () {
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

.channel-page > .header > .title {
  position: relative;
  align-items: center;
}

.channel-page > .header > .title > .channel-type {
  position: absolute;
  right: -85px;
  top: 4px;
  border-radius: 10px;
  background-color: var(--secondary-color-6);
  padding: 7px 5px;
}

.channel-page > .contents {
  --item-min-width: 300px;
}

</style>
