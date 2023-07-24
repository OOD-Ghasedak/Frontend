<template>
  <ChannelRow :channel="channel">
    <h5 class="role">
      {{ channel.role }}
    </h5>
  </ChannelRow>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import ChannelRow from './ChannelRow.vue'
import { OwnedOrManagedChannel } from '~/models'

@Component({ components: { ChannelRow } })
export default class OwnedOrManagedChannelRow extends ChannelRow {
        @Prop() readonly channel: OwnedOrManagedChannel
}
</script>

<style>

</style>
