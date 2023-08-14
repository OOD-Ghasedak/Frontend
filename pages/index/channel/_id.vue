<template>
  <div class="channel-page">
    <back-button />
    <div class="header">
      <img>
      <div class="title">
        <h1 />
        <div class="role" />
        <div class="channel-type" />
      </div>
    </div>
    <div class="contents">
      <div v-for="(content, i) in contents" :key="`content-${i}`" />
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Channel, ChannelContent } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelPage extends RootComponent {
  channel: Channel = { id: '2', name: '', description: '' }
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

<style>
</style>
