<template>
  <div class="home-page">
    <div class="header">
      <div class="row-1">
        <div class="user">
          <img class="image-sized-2 circular">
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
        <button class="see-joined-channels-button" @click="joinedChannelsAreVisible=true">
          <h4 class="text-centered">
            {{ 'کانال‌های عضو شده' }}
          </h4>
        </button>
        <button class="see-owned-or-managed-channels-button" @click="joinedChannelsAreVisible=false">
          <h4 class="text-centered">
            {{ 'کانال‌های درحال مدیریت/صاحب' }}
          </h4>
        </button>
      </div>
      <div v-if="joinedChannelsAreVisible" class="see-joined-channels">
        <div v-for="(channel, i) in joinedChannels" :key="`joined-channel-${i}`" class="channel ">
          <div class="content">
            <img class="image-sized-3 circular">
            <div class="text">
              <h3 class="name">
                {{ channel.name }}
              </h3>
              <p class="description">
                {{ channel.description }}
              </p>
            </div>
          </div>
          <h5 class="role">
            {{ channel.subscription_status }}
          </h5>
          <button class="visit-button">
            <h5>{{ 'مشاهده کانال >' }}</h5>
          </button>
        </div>
      </div>
      <div v-else class="see-owned-or-managed-channels">
        <div v-for="(channel, i) in ownedOrManagedChannels" :key="`owned-or-managed-channel-${i}`" class="channel">
          <div class="content">
            <img class="image-sized-3 circular">
            <div class="text">
              <h3 class="name">
                {{ channel.name }}
              </h3>
              <p class="description">
                {{ channel.description }}
              </p>
            </div>
          </div>
          <h5 class="role">
            {{ channel.role }}
          </h5>
          <button class="visit-button">
            <h5>{{ 'مشاهده کانال >' }}</h5>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

interface Channel {
  id: string;
  name: string;
  description: string;
}

interface JoinedChannel extends Channel {
  subscription_status;
}

interface OwnedOrManagedChannel extends Channel {
  role;
}

@Component
export default class Page extends Vue {
  username = 'sep'

  joinedChannelsAreVisible = true

  get joinedChannels (): JoinedChannel[] {
    return [{
      id: '2',
      name: 'se',
      description: '2223',
      subscription_status: 0
    }]
  }

  get ownedOrManagedChannels (): OwnedOrManagedChannel[] {
    return [{
      id: '2',
      name: 'se',
      description: '2313',
      role: 3
    }]
  }
}
</script>

<style>
.image-sized-1 {
  width: 50px;
  height: 50px;
}

.image-sized-2 {
  width: 98px;
  height: 98px;
}

.image-sized-3 {
  width: 119px;
  height: 119px;
}

.text-centered {
  text-align: center;
}

.circular {
  border-radius: 50%;
}

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
    background-color: blue;
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

.see-channels > .header {
  flex-direction: row;
}

.see-channels > .header > * {
  width: -webkit-fill-available;
}

.see-channels > .header > button {
  border-radius: 0;
}

.see-channels > .header > .see-joined-channels-button {
  background-color: var(--top-color-1);
}
.see-joined-channels-button > h4 {
  color: var(--top-color-7);
}

.see-channels > .header > .see-owned-or-managed-channels-button {
  background-color: var(--top-color-7);
}
.see-owned-or-managed-channels-button > h4 {
  color: var(--top-color-1);
}

.channel {
  flex-direction: row;
    height: 170px;
    align-items: center;
    justify-content: space-around;
}

.channel > .content > img {
  background-color: blue;
}
.channel > .content {
  flex-direction: row;
}

.channel > .content > .text {
  justify-content: center;
  margin-right: 10px;
}

</style>
