<template>
  <div class="home-page">
    <div class="header">
      <div class="row-1 row">
        <nuxt-link :to="{name: 'ProfilePage'}" custom>
          <div class="user row">
            <img class="image-sized-2 circular" src="@/static/images/ghased.svg">
            <div class="user-name">
              <h3>{{ 'قاصد' }} </h3>
              <h6>{{ profile.username }}</h6>
            </div>
          </div>
        </nuxt-link>
        <div class="ghasedak">
          <h2>
            {{ 'قاصدک' }}
          </h2>
        </div>
        <nuxt-link :to="{name: 'CreateChannelPage'}" custom>
          <div class="create-channel">
            <button class="horizontally-centered circular image-sized-1">
              <h2>{{ '+' }}</h2>
            </button>
            <h6>{{ 'ساخت کانال' }}</h6>
          </div>
        </nuxt-link>
      </div>
      <div class="search-channel">
        <div class="icon-input">
          <input class="text-centered" placeholder="جستجوی کانال">
          <img src="@/static/images/magnifier.svg">
        </div>
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
        <joined-channel-row v-for="(channel, i) in joinedChannels" :key="`joined-channel-${i}`" :channel="channel" />
      </div>
      <div v-else class="see-owned-or-managed-channels">
        <owned-or-managed-channel-row v-for="(channel, i) in ownedOrManagedChannels" :key="`owned-or-managed-channel-${i}`" :channel="channel" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { JoinedChannel, OwnedOrManagedChannel, UserProfile } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class HomePage extends RootComponent {
  profile: UserProfile = {
    username: 'sepehrkianian09',
    email: 'sepehrkianian09@gmail.com',
    phone_number: '09112245833'
  }

  joinedChannelsAreVisible = true

  joinedChannels: JoinedChannel[] = [{
    id: '2',
    name: 'se',
    description: '2223',
    subscription_status: 0
  }]

  ownedOrManagedChannels: OwnedOrManagedChannel[] = [{
    id: '2',
    name: 'se',
    description: '2313',
    role: 3
  }]

  mounted () {
    this.mainConfig.$facades.ghased.getProfile().then((profile) => {
      this.profile = profile
    })
    this.mainConfig.$facades.ghased.getJoinedChannels().then((joinedChannels) => {
      this.joinedChannels = joinedChannels
    })
    this.mainConfig.$facades.ghased.getOwnedOrManagedChannels().then((ownedOrManagedChannels) => {
      this.ownedOrManagedChannels = ownedOrManagedChannels
    })
  }
}
</script>
<router>
  {name: "HomePage"}
</router>

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
    justify-content: space-around;
    height: fit-content;
}

.user > .user-name {
  margin-right: 10px;
  justify-content: center;
}

.search-channel {
  padding: 0 15%;
}

.search-channel > input {
  width: min(90%, 400px);
}

.home-page > .header > .row-1 {
  position: relative;
}

.row-1 > .ghasedak {
  position: absolute;
  align-self: center;
}

.row-1 > a {
  display: flex;
}

.create-channel {
  justify-content: center;
}

.create-channel > button {
  justify-content: center;
  margin-bottom: 5px;
  background-color: var(--top-color-3);
  padding: 0;
}
.create-channel > button > h2 {
  margin: auto;
  color: var(--white);
}

.see-channels > .header {
  flex-direction: row;
}

.see-channels > .header > * {
  width: -webkit-fill-available;
}

.see-channels > .header > button {
  border-radius: 0;
  justify-content: center;
  height: 40px;
  align-items: center;
}

.see-channels > .header > .see-joined-channels-button {
  background-color: var(--top-color-1);
  border-top-right-radius: 10px;
}
.see-joined-channels-button > h4 {
  color: var(--top-color-7);
}

.see-channels > .header > .see-owned-or-managed-channels-button {
  background-color: var(--top-color-7);
  border-top-left-radius: 10px;
}
.see-owned-or-managed-channels-button > h4 {
  color: var(--top-color-1);
}

</style>
