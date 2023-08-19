<template>
  <div class="channel-content">
    <div class="content-type">
      <img class="image-sized--1" src="@/static/images/channel-content-types/text.svg">
    </div>
    <div v-if="content.is_monetary" class="monetary-sign row">
      <img class="image-sized--1" src="@/static/images/dollar-green.svg">
      <p class="text-centered">
        {{ 'محتوای پولی' }}
      </p>
    </div>
    <h5 class="text-centered">
      {{ content.name }}
    </h5>
    <!-- <h6>
          {{ content.summary }}
        </h6> -->
    <h6>
      {{ content.data }}
    </h6>
    <div class="actions row">
      <div v-if="channelRoleProps.canManageContents" class="content-management row">
        <button class="error-button primary-button remove-button">
          <p>{{ 'حذف...' }}</p>
          <img src="@/static/images/trash-can.svg" class="image-sized--2">
        </button>
        <button class="primary-button">
          <p>{{ 'ویرایش محتوا...' }}</p>
          <img src="@/static/images/edit.svg" class="image-sized--2">
        </button>
      </div>
      <button class="primary-button">
        <p>{{ 'دیدن مطلب...' }}</p>
        <img src="@/static/images/next.svg" class="image-sized--2">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { ChannelContent, ChannelRole, ChannelRolesProps } from '~/models'

  @Component
export default class ChannelContentCard extends Vue {
  @Prop() readonly content: ChannelContent

  channelRole: ChannelRole = ChannelRole.ADMIN

  get channelRoleProps () {
    return ChannelRolesProps[this.channelRole]
  }
}
</script>

<style scoped>
.channel-content {
  --channel-left-right-padding: 3%;
  --channel-absolute-items-top-padding: 10px;
}

.channel-content {
  position: relative;
  padding: 20px var(--channel-left-right-padding) 10px;
  gap: 25px;
  border-bottom: 1px solid var(--top-color-1);
  z-index: 1;
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

.channel-content > .monetary-sign {
  left: var(--channel-left-right-padding);
  top: var(--channel-absolute-items-top-padding);
  position: absolute;
  align-items: center;
  gap: 5px;
  width: 70px;
  height: 30px;
  flex-wrap: nowrap;
  padding: 2.5px 3px;
}

.channel-content > .actions {
  justify-content: space-between;
}

.channel-content > .actions > .content-management {
  gap: 0.5rem;
}
</style>
