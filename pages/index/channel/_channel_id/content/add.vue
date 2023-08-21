<template>
  <div class="channel-add-content-page">
    <BackButton />
    <div class="title">
      <h1 class="text-centered">
        {{ 'ورود' }}
      </h1>
      <p class="text-centered">
        {{ '.لطفا اطلاعات زیر را وارد کنید' }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelAddContentPage extends RootComponent {

}
</script>
<router>
{name: "ChannelAddContentPage"}
</router>

<style>
.main {
  justify-content: start;
}

/* .titl */
</style>
