<template>
  <button class="join-sign row" @click="join">
    <h6>{{ 'عضویت' }}</h6>
    <img class="image-sized--2" src="@/static/images/plus-circular-white.svg">
  </button>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import RootComponent from '~/utils/rootComponent'

@Component
export default class JoinSign extends RootComponent {
    @Prop() readonly channelId: string

    join () {
      this.mainConfig.$facades.ghased.joinChannel(this.channelId).then(() => {
        this.$router.go(0)
      })
    }
}
</script>

<style scoped>
.join-sign {
background-color: var(--secondary-color-1);
padding: 3px 1rem 3px 3px;
border-radius: 10px;
gap: 1rem;
height: fit-content;
}

.join-sign > * {
  color: white;
}
</style>
