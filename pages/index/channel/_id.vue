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
    <div class="contents">
      <div v-for="(content, i) in contents" :key="`content-${i}`" class="channel-content">
        <img class="content-type" src="@/static/images/channel-content-types/text.svg">
        <h5>{{ content.name }}</h5>
        <h6>{{ content.summary }}</h6>
        <p>{{ content.data }}</p>
        <div class="actions">
          <button>
            <h5>{{ 'دانلود سریع' }}</h5>
            <img>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Channel, ChannelContent } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelPage extends RootComponent {
  channel: Channel = { id: '2', name: 'mofo', description: 'this channel is about mofos' }
  contents: ChannelContent[] = []
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
</style>
