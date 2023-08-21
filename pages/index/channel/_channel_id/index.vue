<template>
  <div class="channel-page">
    <div class="header row">
      <div class="right row">
        <img class="circular image-sized-3" src="@/static/images/ghased.svg">
        <nuxt-link v-if="channelRoleProps.canAddContent" :to="{name: 'ChannelAddContentPage', params: {...$route.params}}" custom>
          <div class="the-link">
            <button class="horizontally-centered circular image-sized-1">
              <img class="image-sized--1" src="@/static/images/plus.svg">
            </button>
            <h6>{{ 'افزودن محتوا' }}</h6>
          </div>
        </nuxt-link>
        <nuxt-link v-if="channelRoleProps.canManageChannel" :to="{name: 'ChannelManagePage', params: {...$route.params}}" custom>
          <div class="the-link">
            <button class="horizontally-centered circular image-sized-1">
              <img class="image-sized--1" src="@/static/images/info.svg">
            </button>
            <h6>{{ 'مدیریت کانال' }}</h6>
          </div>
        </nuxt-link>
      </div>
      <div class="center">
        <h1>{{ channel.name }}</h1>
        <channel-role-component :role="channelRole" />
        <button v-if="channelRoleProps.canLeaveChannel" class="leave-group-button error-button" @click="leaveChannel">
          <h6>{{ 'خروج از کانال...' }}</h6>
          <img class="image-sized--1" src="@/static/images/leave-group.svg">
        </button>
        <subscription-sign v-if="channel.has_subscription" />
        <joined-sign v-if="channelRoleProps.canLeaveChannel" />
        <join-sign v-if="channelRoleProps.canJoinChannel" :channel-id="channelId" />
      </div>
      <back-button />
    </div>
    <div class="contents responsive-grid">
      <channel-content-card v-for="(content, i) in contents" :key="`content-${i}`" :content="content" />
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import JoinSign from '~/components/channel/JoinSign.vue'
import JoinedSign from '~/components/channel/JoinedSign.vue'
import SubscriptionSign from '~/components/channel/SubscriptionSign.vue'
import { Channel, ChannelContent, ChannelContentType, ChannelRole, ChannelRolesProps } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: {
    SubscriptionSign,
    JoinedSign,
    JoinSign
  }
})
export default class ChannelPage extends RootComponent {
  get channelRole () {
    return this.channel.role
  }

  get channelRoleProps () {
    return ChannelRolesProps[this.channelRole]
  }

  channel: Channel = {
    id: '2',
    name: 'mofo',
    description: 'this channel is about mofos',
    role: ChannelRole.MEMBER,
    has_subscription: true
  }

  contents: ChannelContent[] = [
    {
      id: '0',
      title: 'متن آهنگ ساسی',
      summary: 'متن آهنگ ساسی',
      price: 10000,
      content_type: ChannelContentType.IMAGE,
      is_premium: true
    },
    {
      id: '1',
      title: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      content_type: ChannelContentType.TEXT,
      complete_content: {
        text: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا'
      },
      is_premium: false
    },
    {
      id: '2',
      title: 'متن آهنگ ساسی',
      price: 10000,
      summary: 'متن آهنگ ساسی',
      content_type: ChannelContentType.IMAGE,
      complete_content: {
        text: 'صدای من رو میشنوید از کالیفرنیا آمریکا',
        file: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/how_to_cut_out_images_photoshop_P1_mobile_360x270?$pjpeg$&jpegSize=200&wid=720'
      },
      is_premium: true
    }
  ]

  get channelId (): string {
    return this.$route.params.channel_id
  }

  joinChannel () {
    this.mainConfig.$facades.ghased.joinChannel(this.channelId)
  }

  leaveChannel () {
    this.mainConfig.$facades.subscriber.leaveChannel(this.channelId).then(() => {
      this.$router.go(0)
    })
  }

  mounted () {
    this.mainConfig.$facades.subscriber.getChannel(this.channelId).then((channel) => {
      this.channel = channel
    })
    this.mainConfig.$facades.subscriber.getChannelContents(this.channelId).then((contents) => {
      this.contents = contents
    })
  }
}
</script>
<router>
  {name: "ChannelPage"}
</router>

<style>
.channel-page {
  height: 100%;
  padding: 20px 3%;
  gap: 20px;
}

.channel-page > .header {
  justify-content: space-between;
  align-items: center;
}

.channel-page > .header > .back-button {
  position: initial;
  height: fit-content;
}

.channel-page > .header > .center {
  position: relative;
  align-items: center;
}

.channel-page > .header > .center > .subscription-sign {
  position: absolute;
  right: -85px;
  top: 4px;
}

.channel-page > .header > .center > .joined-sign {
  position: absolute;
  left: -125px;
  top: 5px;
}
.channel-page > .header > .center > .join-sign {
  position: absolute;
  left: -125px;
  top: 5px;
}

.channel-page > .header > .center > .leave-group-button {
  padding: 5px 1rem;
  align-items: center;
  gap: 0.8rem;
  margin-top: 10px;
}

.channel-page > .header > .right {
  gap: 10px;
}

.channel-page > .header > .right > a {
  display: flex;
  justify-content: center;
}

.channel-page > .header > .right .the-link {
  justify-content: center;
}

.channel-page > .header > .right .the-link > button {
  justify-content: center;
  margin-bottom: 5px;
  background-color: var(--top-color-3);
  padding: 0;
}
.channel-page > .header > .right .the-link > button > img {
  margin: auto;
}

.channel-page > .contents {
  --item-min-width: 300px;
}

</style>
