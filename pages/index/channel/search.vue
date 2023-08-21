<template>
  <div class="search-channel-page">
    <button class="close-button" @click="close">
      <img class="image-sized--1" src="@/static/images/cross.svg">
    </button>
    <div class="icon-input">
      <input v-model="searchInput">
      <img src="@/static/images/magnifier.svg" @click="searchChannels">
    </div>
    <div class="channels">
      <channel-row v-for="(channel, i) in channels" :key="`channel-${i}`" :channel="channel" />
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Channel, ChannelRole } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class SearchChannelPage extends RootComponent {
  channels: Channel[] = [
    {
      id: '2',
      name: 'mofo',
      description: 'this channel is about mofos',
      role: ChannelRole.SPECIAL_MEMBER,
      has_subscription: true
    },
    {
      id: '2',
      name: 'mofo',
      description: 'this channel is about mofos',
      role: ChannelRole.VISITOR,
      has_subscription: true
    },
    {
      id: '2',
      name: 'mofo',
      description: 'this channel is about mofos',
      role: ChannelRole.ADMIN,
      has_subscription: false
    }
  ]

  searchInput: string = ''

  searchChannels () {
    this.mainConfig.$facades.ghased.searchChannel(this.searchInput).then((channels) => {
      this.channels = channels
    })
  }

  close () {
    this.$router.back()
  }
}
</script>
<router>
  {name: "SearchChannelPage"}
</router>

<style>
.search-channel-page {
  height: 100%;
  padding: 10px 2%;
}

.search-channel-page {
  position: relative;
}
.search-channel-page > .close-button {
  position: absolute;
  z-index: 1;
  right: 5%;
  top: 20px;
}
</style>
