<template>
  <div class="channel-content-page">
    <div class="header">
      <back-button />
      <div class="channel row">
        <img class="image-sized-2 circular" src="@/static/images/ghased.svg">
        <h5>{{ channelName }}</h5>
      </div>
      <div class="center">
        <div class="top row">
          <img class="type-image image-sized-1" :src="contentTypeIconSrc">
          <h2>{{ content.title }}</h2>
        </div>
        <div class="bottom row">
          <div class="writer bottom-item row">
            <img src="@/static/images/channel-roles/admin.svg" class="image-sized--1">
            <h5>{{ `@${contentWriter}` }}</h5>
          </div>
          <div class="date bottom-item row">
            <img src="@/static/images/calendar.svg" class="image-sized--1">
            <h5>{{ contentDate }}</h5>
          </div>
        </div>
      </div>
      <premium-sign v-if="content.is_premium" />
    </div>
    <div class="summary manage-section">
      <h3 class="header">
        {{ 'خلاصه محتوا' }}
      </h3>
      <h5 class="content">
        {{ content.summary }}
      </h5>
    </div>
    <div class="content manage-section">
      <div class="content">
        <component
          :is="contentProps.content.fileTag"
          v-if="contentProps.content && content.complete_content"
          class="file-content"
          :src="content.complete_content.file"
        />
        <h6 v-else-if="content.complete_content" class="text-content">
          {{ content.complete_content.text }}
        </h6>
        <img v-else src="@/static/images/defaults/channel-default-content.svg" class="default-file-content">
        <button
          v-if="!content.complete_content"
          class="buy-button secondary-button-2 horizontally-centered"
          @click="$refs[buyContentRefId].show()"
        >
          <h6>{{ 'خرید محتوا' }}</h6>
          <img class="image-sized--1" src="@/static/images/paper-money.svg">
        </button>
      </div>
    </div>
    <buy-content :ref="buyContentRefId" :content="content" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import BuyContent from '~/components/content/BuyContent.vue'
import PremiumSign from '~/components/content/PremiumSign.vue'
import { ChannelContent, ChannelContentType, ChannelContentTypeProps } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: {
    PremiumSign,
    BuyContent
  }
})
export default class ChannelContentPage extends RootComponent {
  buyContentRefId: string = 'buyContent'

  channelName: string = 'آخرین اثر وینسنت ون‌گاک'
  contentWriter: string = 'ahmad'
  contentDate: string = '1402/02/22'

  content: ChannelContent = {
    id: '1',
    title: '',
    price: 0,
    summary: '',
    content_type: ChannelContentType.TEXT,
    // complete_content: {
    //   text: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا'
    // },
    is_premium: false
  }

  get contentProps () {
    return ChannelContentTypeProps[this.content.content_type]
  }

  get contentId (): string {
    return this.$route.params.content_id
  }

  get channelId (): string {
    return this.$route.params.channel_id
  }

  get contentTypeIconSrc () {
    return require(`@/static/images/channel-content-types/${this.contentProps.icon}.svg`)
  }

  mounted () {
    this.mainConfig.$facades.subscriber.getChannelContent(this.contentId).then((response) => {
      this.content = response
    })
  }
}
</script>
<router>
  {name: "ChannelContentPage"}
</router>

<style>
.channel-content-page {
  height: 100%;
  margin: 30px 4%;
  gap: 1rem;
}

.channel-content-page>.header {
  position: relative;
  min-height: 100px;
  gap: 1rem;
}

.channel-content-page>.header>.channel {
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  gap: 1rem;
  width: 240px;
  flex-wrap: nowrap;
}

.channel-content-page>.header>.channel>h5 {
  text-align: center;
}

.channel-content-page>.header>.center {
  margin: auto;
  gap: 1rem;
}

.channel-content-page>.header>.center .type-image {
  padding: 10px;
  background-color: var(--top-color-7);
  border-radius: 10px;
}

.channel-content-page>.header>.center>.top {
  align-items: center;
  gap: 1rem;
}

.channel-content-page>.header>.center>.bottom {
  /* gap: 5rem; */
}

.bottom-item+.bottom-item::before {
  content: '';
  border: 1px solid;
  width: 0;
  margin: 0 3vw;
}

.bottom>.bottom-item {
  gap: 1rem;
}

.bottom>.bottom-item>h5 {
  align-self: center;
}

.channel-content-page>.header>.premium-sign {
  align-self: center;
}

.channel-content-page .manage-section {
  width: -webkit-fill-available;
  position: relative;
  --right-padding: 10px;
  --top-padding: 15px;
  --left-padding: 15px;
  padding-bottom: 10px;
  z-index: 0;
}

.channel-content-page .manage-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .3;
  z-index: -1;
  background-color: var(--top-color-7);
  border-radius: 10px;
}

.channel-content-page .manage-section {
  margin: 0 4%;
}

.channel-content-page .manage-section::before {
  border-radius: 0;
}

.channel-content-page .manage-section>.header {
  flex-direction: row;
  gap: 1rem;
  border-bottom: 1px solid var(--top-color-1);
  padding: var(--top-padding) var(--right-padding) 10px 10px;
  width: -moz-fit-content;
  width: fit-content;
}

.channel-content-page .manage-section>.content {
  margin-right: var(--right-padding);
  margin-top: 10px;
  margin-left: var(--left-padding);
}

.channel-content-page>.content>.content {
  gap: 1rem;
  margin: 20px 5%;
}</style>
