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
      <div v-for="(content, i) in contents" :key="`content-${i}`" class="channel-content">
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
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا'
    },
    {
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا'
    },
    {
      name: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      type: ChannelContentType.TEXT,
      data: 'صدای من رو میشنوید از کالیفرنیا آمریکا'
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

.contents > .channel-content {
  position: relative;
  padding: 20px 3% 10px;
  gap: 25px;
  border-bottom: 1px solid var(--top-color-1);
  z-index: 1;
}

.contents > .channel-content::before {
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
