<template>
  <div class="channel-content">
    <div class="content-type">
      <img class="image-sized--1" :src="typeIconSrc">
    </div>
    <premium-sign v-if="content.is_premium" />
    <component :is="contentProps.content.fileTag" v-if="contentProps.content && content.complete_content" class="file-content" :src="content.complete_content.file" />
    <img v-else-if="contentProps.content" src="@/static/images/defaults/channel-default-content.svg" class="default-file-content">
    <h5 class="text-centered">
      {{ content.title }}
    </h5>
    <!-- <h6>
          {{ content.summary }}
        </h6> -->
    <h6>
      {{ content.summary }}
    </h6>
    <div class="actions row">
      <div v-if="channelRoleProps.canManageContents" class="content-management row">
        <button class="error-button primary-button remove-button">
          <p>{{ 'حذف...' }}</p>
          <img src="@/static/images/trash-can.svg" class="image-sized--2">
        </button>
        <nuxt-link :to="{name: 'ChannelEditContentPage', params: {...$route.params, content_id: content.id}}" class="primary-button">
          <p>{{ 'ویرایش محتوا...' }}</p>
          <img src="@/static/images/edit.svg" class="image-sized--2">
        </nuxt-link>
      </div>
      <nuxt-link :to="{name: 'ChannelContentPage', params: {...$route.params, content_id: content.id}}" class="primary-button">
        <p>{{ 'دیدن مطلب...' }}</p>
        <img src="@/static/images/next.svg" class="image-sized--2">
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import PremiumSign from '../content/PremiumSign.vue'
import { ChannelContent, ChannelContentTypeProps, ChannelRole, ChannelRolesProps } from '~/models'

@Component({
  components: {
    PremiumSign
  }
})
export default class ChannelContentCard extends Vue {
  @Prop() readonly content: ChannelContent

  // todo
  channelRole: ChannelRole = ChannelRole.ADMIN

  get channelRoleProps () {
    return ChannelRolesProps[this.channelRole]
  }

  get contentProps () {
    return ChannelContentTypeProps[this.content.content_type]
  }

  get typeIconSrc () {
    return require(`@/static/images/channel-content-types/${this.contentProps.icon}.svg`)
  }
}
</script>

<style scoped>
.channel-content {
  --channel-top-padding: 20px;
  --channel-left-right-padding: 3%;
  --channel-absolute-items-top-padding: 10px;
}

.channel-content {
  position: relative;
  padding: var(--channel-top-padding) var(--channel-left-right-padding) 10px;
  gap: 25px;
  border-bottom: 1px solid var(--top-color-1);
  z-index: 1;
  max-width: 500px;
}

.channel-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  z-index: -1;
  background-color: var(--top-color-7);
}

.channel-content > .content-type {
  position: absolute;
  right: var(--channel-left-right-padding);
  top: var(--channel-absolute-items-top-padding);
  border-radius: 10px;
  padding: 5px;
  background-color: var(--top-color-7);
}

.channel-content > .premium-sign {
  left: var(--channel-left-right-padding);
  top: var(--channel-absolute-items-top-padding);
  position: absolute;
}

.channel-content > .file-content {
  aspect-ratio: 16 / 9;
  margin: calc(-1 * var(--channel-top-padding)) calc(-1 * var(--channel-left-right-padding)) 0;
}
.channel-content > .default-file-content {
  aspect-ratio: 16 / 9;
}

.channel-content > .actions {
  justify-content: space-between;
}

.channel-content > .actions > .content-management {
  gap: 0.5rem;
}
</style>
