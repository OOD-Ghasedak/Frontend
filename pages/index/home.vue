<template>
  <div class="home-page">
    <div class="header">
      <div class="row-1">
        <div class="user">
          <img>
          <div class="user-name">
            <h3>{{ 'قاصد' }} </h3>
            <h6>{{ username }}</h6>
          </div>
        </div>
        <div class="ghasedak">
          <h2>
            {{ 'قاصدک' }}
          </h2>
        </div>
        <div class="create-channel">
          <button class="circular-button">
            {{ '+' }}
          </button>
          <h6>{{ 'ساخت کانال' }}</h6>
        </div>
      </div>
      <div class="search-channel">
        <input placeholder="جستجوی کانال">
      </div>
    </div>
    <div class="see-channels">
      <div class="header">
        <button> {{ 'کانال‌های عضو شده' }}</button>
        <button> {{ 'کانال‌های درحال مدیریت/صاحب' }}</button>
      </div>
      <div v-if="joinedChannelsAreVisible" class="see-joined-channels">
        <div v-for="(channel, i) in joinedChannels" :key="`channel-${i}`">
          {{ channel }}
        </div>
      </div>
      <div v-else class="see-owned-or-managed-channels">
        <div v-for="(channel, i) in ownedOrManagedChannels" :key="`channel-${i}`">
          {{ channel }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class Page extends Vue {
  username = 'sep'

  joinedChannelsAreVisible = true

  get joinedChannels () {
    return []
  }

  get ownedOrManagedChannels () {
    return []
  }
}
</script>

<style>
.home-page {
  height: 100%;
}

.home-page > .header {
  height: 300px;
  justify-content: space-evenly;
}

.home-page > .see-channels {
  height: inherit;
}

.home-page > .header > .row-1 {
  flex-direction: row;
    justify-content: space-around;
    height: fit-content;
}

.row-1 > .user {
  flex-direction: row;
}
.row-1 > .user > img {
  width: 98px;
    height: 98px;
    background-color: blue;
    border-radius: 50%;
}
.user > .user-name {
  margin-right: 10px;
    text-align: right;
    justify-content: center;
}

.search-channel > input {
  width: min(90%, 400px);
    align-self: center;
    text-align: center;
}

.create-channel {
  justify-content: center;
}

.create-channel > button {
  align-self: center;
  justify-content: center;
    display: flex;
    margin-bottom: 5px
}

.circular-button {
  width: 50px;
    height: 50px;
    background-color: var(--top-color-3);
    color: var(--white);
    border-radius: 50%;
    padding: 0;
}
</style>
