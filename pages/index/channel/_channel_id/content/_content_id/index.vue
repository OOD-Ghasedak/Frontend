<template>
  <div class="channel-content-page">
    <div class="header">
      <back-button />
      <div class="channel row">
        <img class="image-sized-2 circular" src="@/static/images/ghased.svg">
        <h5>{{ channelName }}</h5>
      </div>
      <div class="center">
        <div class="top row">
          <img class="type-image image-sized-1" :src="contentTypeIconSrc">
          <h2>{{ content.title }}</h2>
        </div>
        <div class="bottom row">
          <div class="writer bottom-item row">
            <img src="@/static/images/channel-roles/admin.svg" class="image-sized--1">
            <h5>{{ `@${contentWriter}` }}</h5>
          </div>
          <div class="date bottom-item row">
            <img src="@/static/images/calendar.svg" class="image-sized--1">
            <h5>{{ contentDate }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { ChannelContent, ChannelContentType, ChannelContentTypeProps } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelContentPage extends RootComponent {
  channelName: string = 'آخرین اثر وینسنت ون‌گاک'
  contentWriter: string = 'ahmad'
  contentDate: string = '1402/02/22'

  content: ChannelContent = {
    id: '1',
    title: 'متن آهنگ ساسی',
    price: 10000,
    summary: 'متن آهنگ ساسی',
    content_type: ChannelContentType.TEXT,
    complete_content: {
      text: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا'
    },
    is_premium: false
  }

  get contentProps () {
    return ChannelContentTypeProps[this.content.content_type]
  }

  get contentId (): string {
    return this.$route.params.content_id
  }

  get channelId (): string {
    return this.$route.params.channel_id
  }

  get contentTypeIconSrc () {
    return require(`@/static/images/channel-content-types/${this.contentProps.icon}.svg`)
  }

  mounted () {
    // get channel
    // get contents
  }
}
</script>
<router>
  {name: "ChannelContentPage"}
</router>

<style>

.channel-content-page {
  height: 100%;
  margin: 30px 4%;
}

.channel-content-page > .header {
  position: relative;
}

.channel-content-page > .header > .channel {
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  gap: 1rem;
  width: 240px;
  flex-wrap: nowrap;
}
.channel-content-page > .header > .channel > h5 {
  text-align: center;
}

.channel-content-page > .header > .center {
  margin: auto;
  gap: 1rem;
}

.channel-content-page > .header > .center .type-image {
  padding: 10px;
  background-color: var(--top-color-7);
  border-radius: 10px;
}

.channel-content-page > .header > .center > .top {
  align-items: center;
  gap: 1rem;
}

.channel-content-page > .header > .center > .bottom {
  /* gap: 5rem; */
}
.bottom-item + .bottom-item::before {
  content: '';
  border: 1px solid;
  width: 0;
  margin: 0 3vw;
}

.bottom > .bottom-item {
  gap: 1rem;
}
.bottom > .bottom-item > h5 {
  align-self: center;
}
</style>
