<template>
  <div class="channel-manage-page">
    <div class="header">
      <back-button />
      <button class="remove-channel-button error-button">
        <h5>{{ 'حذف کانال...' }}</h5>
        <img class="image-sized--1" src="@/static/images/cross-red.svg">
      </button>
      <h1>{{ 'مدیریت کانال' }}</h1>
      <img class="circular image-sized-3">
      <div class="channel-name row">
        <h2 class="see">
          {{ 'channel-name' }}
        </h2>
        <button class="edit">
          <img class="image-sized--1" src="@/static/images/edit.svg">
        </button>
      </div>
    </div>
    <div class="row">
      <div class="biography manage-section">
        <div class="header">
          <img src="@/static/images/info-purple.svg">
          <h4>{{ 'بیوگرافی کانال' }}</h4>
        </div>
        <button class="edit">
          <h6>{{ 'ویرایش' }}</h6>
          <img class="image-sized--1" src="@/static/images/edit.svg">
        </button>
        <h5 class="content">
          {{ 'biography' }}
        </h5>
      </div>
    </div>
    <div class="row-2" />
    <div class="row-3" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import RootComponent from '~/utils/rootComponent'

    @Component
export default class ChannelManagePage extends RootComponent {

}
</script>
<router>
{name: "ChannelManagePage"}
</router>

<style>
.channel-manage-page {
  height: 100%;
  padding: 40px 5% 0 9%;
}

.channel-manage-page > .header {
  position: relative;
  align-items: center;
}

.channel-manage-page > .header > .back-button {
  top: 0;
  left: 0;
}

.channel-manage-page > .header > .remove-channel-button {
  padding: 7px;
  position: absolute;
  top: 0;
  right: 0;
}

.channel-manage-page .manage-section {
  width: -webkit-fill-available;
  --right-padding: 10px;
  --top-padding: 15px;
  --left-padding: 15px;
  padding-bottom: 10px;
}
.channel-manage-page .manage-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  z-index: 0;
  background-color: var(--top-color-7);
  border-radius: 10px;
}

.channel-manage-page .manage-section > .header {
  flex-direction: row;
  gap: 1rem;
  border-bottom: 1px solid var(--top-color-1);
  padding: var(--top-padding) var(--right-padding) 10px 10px;
  width: -moz-fit-content;
  width: fit-content;
}
.channel-manage-page .manage-section > .header > img {
  background-color: var(--top-color-7);
  border-radius: 10px;
  padding: 5px 6px;
  width: 36px;
  height: 34px;
}
.channel-manage-page .manage-section > .content {
  margin-right: var(--right-padding);
  margin-top: 10px;
}

.channel-manage-page .biography {
  position: relative;
}

.channel-manage-page .biography > .edit {
  position: absolute;
  top: var(--top-padding);
  left: var(--left-padding);
  align-items: center;
}

</style>
