<template>
  <div class="channel-content-page" />
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { ChannelContent, ChannelContentType } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelContentPage extends RootComponent {
  contents: ChannelContent = {
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
  {name: "ChannelContentPage"}
</router>

<style>

</style>
