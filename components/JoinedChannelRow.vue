<template>
  <ChannelRow :channel="channel">
    <h5 class="subscription_status">
      {{ channel.subscription_status }}
    </h5>
  </ChannelRow>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import ChannelRow from './ChannelRow.vue'
import { JoinedChannel } from '~/models'

@Component({ components: { ChannelRow } })
export default class JoinedChannelRow extends ChannelRow {
      @Prop() readonly channel: JoinedChannel
}
</script>

  <style>

  </style>
