<template>
  <div class="channel-edit-content-page" />
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { ChannelContent, ChannelContentType } from '~/models'
import RootComponent from '~/utils/rootComponent'

  @Component
export default class ChannelEditContentPage extends RootComponent {
  content: ChannelContent = {
    id: '0',
    name: 'متن آهنگ ساسی',
    price: 10000,
    summary: 'متن آهنگ ساسی',
    type: ChannelContentType.TEXT,
    data: 'صدای من رو میشنوید از کالیفرنیا آمریکا',
    is_monetary: true
  }

  get contentId (): string {
    return this.$route.params.content_id
  }

  get channelId (): string {
    return this.$route.params.channel_id
  }

  mounted () {
    // get channel
    // get contents
  }
}
</script>
<router>
{name: "ChannelEditContentPage"}
</router>

<style>

</style>
