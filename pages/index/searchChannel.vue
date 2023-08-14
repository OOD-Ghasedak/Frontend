<template>
  <div class="search-channel-page">
    <div class="icon-input">
      <input v-model="searchInput">
      <img src="@/static/images/magnifier.svg" @click="searchChannels">
    </div>
    <div class="channels">
      <ChannelRow v-for="(channel, i) in channels" :key="`channel-${i}`" :channel="channel" />
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Channel } from '~/models'
import ChannelRow from '~/components/ChannelRow.vue'

@Component({
  components: { ChannelRow }
})
export default class SearchChannelPage extends Vue {
  channels: Channel[] = [
    { id: '1', name: 'goods', description: 'چرا؟' },
    { id: '2', name: 'bads', description: 'چطور؟' }
  ]

  searchInput: string = ''

  searchChannels () {}
}
</script>

<style>
.search-channel-page {
  height: 100%;
  padding: 10px 2%;
}
</style>
