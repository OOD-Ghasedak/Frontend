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
          {{ channel.name }}
        </h2>
        <button class="edit" @click="$refs[refIds.changeName].show()">
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
        <button class="edit" @click="$refs[refIds.changeBiography].show()">
          <h6>{{ 'ویرایش' }}</h6>
          <img class="image-sized--1" src="@/static/images/edit.svg">
        </button>
        <h5 class="content">
          {{ channel.description }}
        </h5>
      </div>
      <div class="admins manage-section">
        <div class="header">
          <img src="@/static/images/channel-roles/admin.svg">
          <h4>{{ 'مدیران کانال' }}</h4>
        </div>
        <div class="content">
          <div v-for="(admin, i) in admins" :key="`admin-${i}`" class="admin row">
            <div class="content row" @click="$refs[refIds.adminReport].show(admin)">
              <img src="@/static/images/ghased.svg" class="image-sized-1">
              <div class="names">
                <h5>{{ admin.ghased.full_name }}</h5>
                <h6>{{ `@${admin.ghased.username}` }}</h6>
              </div>
            </div>
            <div class="actions row">
              <button class="primary-button" @click="$refs[refIds.changeAdminProfit].show(admin)">
                <p>{{ 'تغییر درصد' }}</p>
                <img src="@/static/images/exchange.svg" class="image-sized--2">
              </button>
              <button class="error-button" @click="$refs[refIds.dischargeAdmin].show(admin)">
                <p>{{ 'عزل' }}</p>
                <img class="image-sized--2" src="@/static/images/leave-red.svg">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subscriptions manage-section">
      <div class="header">
        <img src="@/static/images/info-green.svg">
        <h4 class="secondary">
          {{ 'مدیریت اشتراک' }}
        </h4>
      </div>
      <div class="content">
        <div class="subscriptions-content row">
          <div v-for="(subscription, i) in subscriptions" :key="`subscription-${i}`" class="subscription">
            <div class="length row">
              <h1>{{ subscriptionLengthRepresentation(subscription) }}</h1>
              <h5>{{ 'ماهه' }}</h5>
            </div>
            <div class="price row">
              <h2>{{ subscription.price }}</h2>
              <p>{{ 'تومان' }}</p>
            </div>
          </div>
        </div>
        <button class="edit secondary-button-2">
          <h6>{{ 'ویرایش اشتراک' }}</h6>
          <img class="image-sized--1" src="@/static/images/paper-money.svg">
        </button>
      </div>
    </div>
    <div class="sales-report manage-section">
      <div class="header">
        <img src="@/static/images/report.svg">
        <h4 class="secondary">
          {{ 'گزارش فروش کانال' }}
        </h4>
      </div>
      <div class="content row">
        <div class="sales-report-item row">
          <h5>{{ 'اشتراکات فروخته‌شده' }}</h5>
          <div class="numbers">
            <div class="number row">
              <h2>{{ '250,000,000' }}</h2>
              <h5>{{ 'تومان' }}</h5>
            </div>
            <div class="number row">
              <h2>{{ '340' }}</h2>
              <h5>{{ 'عدد' }}</h5>
            </div>
          </div>
          <button class="secondary-button-2">
            <h6>{{ 'دیدن جزئیات' }}</h6>
            <img class="image-sized--2" src="@/static/images/info-green.svg">
          </button>
        </div>
        <div class="sales-report-item row">
          <h5>{{ 'اشتراکات فروخته‌شده' }}</h5>
          <div class="numbers">
            <div class="number row">
              <h2>{{ '250,000,000' }}</h2>
              <h5>{{ 'تومان' }}</h5>
            </div>
            <div class="number row">
              <h2>{{ '340' }}</h2>
              <h5>{{ 'عدد' }}</h5>
            </div>
          </div>
          <button class="secondary-button-2">
            <h6>{{ 'دیدن جزئیات' }}</h6>
            <img class="image-sized--2" src="@/static/images/info-green.svg">
          </button>
        </div>
      </div>
    </div>
    <div class="members">
      <h2>{{ 'اعضای کانال' }}</h2>
      <div class="content">
        <div v-for="(member, i) in members" :key="`member-${i}`" :class="`member row ${i % 2 == 0 ? 'odd': 'even'}`">
          <div class="content row">
            <img class="image-sized-1 circular" src="@/static/images/ghased.svg">
            <div class="names">
              <h3>{{ member.ghased.full_name }}</h3>
              <h5>{{ `@${member.ghased.username}` }}</h5>
            </div>
          </div>
          <div class="actions row">
            <button class="primary-button" @click="$refs[refIds.promoteToAdmin].show(member)">
              <p>{{ 'ارتقا به مدیر کانال' }}</p>
              <img class="image-sized--2" src="@/static/images/channel-roles/admin.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
    <change-name :ref="refIds.changeName" />
    <change-bio :ref="refIds.changeBiography" />
    <change-admin-profit :ref="refIds.changeAdminProfit" />
    <admin-report :ref="refIds.adminReport" />
    <discharge-admin :ref="refIds.dischargeAdmin" />
    <promote-to-admin :ref="refIds.promoteToAdmin" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import AdminReport from '~/components/channelManage/AdminReport.vue'
import ChangeAdminProfit from '~/components/channelManage/ChangeAdminProfit.vue'
import ChangeBio from '~/components/channelManage/ChangeBio.vue'
import ChangeName from '~/components/channelManage/ChangeName.vue'
import DischargeAdmin from '~/components/channelManage/DischargeAdmin.vue'
import PromoteToAdmin from '~/components/channelManage/PromoteToAdmin.vue'
import { Channel, ChannelAdmin, ChannelMember, ChannelRole, Subscription, SubscriptionDuration, subscriptionLengthNumbers } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: {
    ChangeName,
    ChangeBio,
    ChangeAdminProfit,
    AdminReport,
    DischargeAdmin,
    PromoteToAdmin
  }
})
export default class ChannelManagePage extends RootComponent {
  readonly refIds: {[key: string]: string} = {
    changeName: 'changeName',
    changeBiography: 'changeBiography',
    changeAdminProfit: 'changeAdminProfit',
    adminReport: 'adminReport',
    dischargeAdmin: 'dischargeAdmin',
    promoteToAdmin: 'promoteToAdmin'
  }

  channel: Channel = {
    id: '2',
    name: 'mofo',
    description: 'this channel is about mofos',
    role: ChannelRole.MEMBER,
    has_subscription: true
  }

  admins: ChannelAdmin[] = [
    { id: '0', ghased: { id: '0', full_name: 'sepehr kianian', username: 'sepehrkianian09' }, share: 34 },
    { id: '1', ghased: { id: '0', full_name: 'sepehr kianian', username: 'sepehrkianian09' }, share: 22 },
    { id: '2', ghased: { id: '0', full_name: 'sepehr kianian', username: 'sepehrkianian09' }, share: 11 }
  ]

  subscriptions: Subscription[] = [
    { id: '0', price: 20000, duration_choice: SubscriptionDuration.ONE_MONTH },
    { id: '0', price: 40000, duration_choice: SubscriptionDuration.THREE_MONTH },
    { id: '0', price: 60000, duration_choice: SubscriptionDuration.SIX_MONTH },
    { id: '0', price: 80000, duration_choice: SubscriptionDuration.TWELVE_MONTH }
  ]

  members: ChannelMember[] = [
    { id: '0', ghased: { id: '0', full_name: 'ashkan khademian', username: 'ashkan.khd.q' } },
    { id: '0', ghased: { id: '0', full_name: 'ashkan khademian', username: 'ashkan.khd.q' } },
    { id: '0', ghased: { id: '0', full_name: 'ashkan khademian', username: 'ashkan.khd.q' } }
  ]

  subscriptionLengthRepresentation (subscription: Subscription) {
    return subscriptionLengthNumbers[subscription.duration_choice]
  }

  get channelId () {
    return this.$route.params.channel_id
  }

  mounted () {
    this.mainConfig.$facades.subscriber.getChannel(this.channelId).then((response) => {
      this.channel = response
    })
    this.mainConfig.$facades.channelOwner.getChannelAdmins(this.channelId).then((response) => {
      this.admins = response
    })
    this.mainConfig.$facades.channelOwner.getChannelMembers(this.channelId).then((response) => {
      this.members = response
    })
    this.mainConfig.$facades.subscriber.getChannelSubscriptions(this.channelId).then((response) => {
      this.subscriptions = response
    })
  }
}
</script>
<router>
{name: "ChannelManagePage"}
</router>

<style>
.channel-manage-page {
  min-height: 100%;
  height: fit-content;
  padding: 40px 5% 0 9%;
  gap: 1rem;
}
.channel-manage-page > * {
  height: fit-content;
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

.channel-manage-page > .row {
  flex-wrap: nowrap;
  gap: 1rem;
}

.channel-manage-page .manage-section {
  width: -webkit-fill-available;
  position: relative;
  --right-padding: 10px;
  --top-padding: 15px;
  --left-padding: 15px;
  padding-bottom: 10px;
  z-index: 0;
}
.channel-manage-page .manage-section::before {
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
  margin-left: var(--left-padding);
}

.channel-manage-page .biography > .edit {
  position: absolute;
  top: var(--top-padding);
  left: var(--left-padding);
  align-items: center;
}

.channel-manage-page .admins > .content > .admin {
  justify-content: space-between;
  align-items: center;
}
.admin > .actions {
  gap: 0.5rem;
}
.admin > .content {
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
}

.channel-manage-page .subscriptions > .content {
  gap: 1rem;
}
.channel-manage-page .subscriptions > .content > .edit {
  align-self: center;
}

.subscriptions-content {
  margin-top: 10px;
  justify-content: space-around;
}
.subscriptions-content > .subscription {
  background-color: var(--secondary-color-6);
    border-radius: 10px;
    padding: 2px 10px;
    gap:10px;
}
.subscriptions-content > .subscription > .length {
  align-items: flex-end;
  margin-top: 20px;
  margin-right: -8px;
}
.subscriptions-content > .subscription > .length > h1 {
  line-height: 0.6;
}
.subscriptions-content > .subscription > .price {
  align-items: flex-end;
  margin-bottom: 10px;
  margin-right: 25px;
}
.subscriptions-content > .subscription > .price > h2{
  line-height: 0.6;
}

.channel-manage-page .sales-report > .content {
  justify-content: space-around;
}
.channel-manage-page .sales-report > .content > .sales-report-item {
  align-items: center;
  gap: 1rem;
}
.channel-manage-page .sales-report > .content > .sales-report-item > h5 {
  width: min-content;
  text-align: center;
}
.channel-manage-page .sales-report > .content > .sales-report-item > .numbers {
  align-items: center;
}
.channel-manage-page .sales-report > .content > .sales-report-item > .numbers > .number {
  align-items: center;
}

.channel-manage-page > .members {
  gap: 1rem;
  border: 1px solid var(--top-color-1);
  border-radius: 10px;
  padding: 20px 0 0;
}

.channel-manage-page > .members > h2 {
  text-align: center;
}

.channel-manage-page > .members > .content {
  /* gap: 1rem; */
}

.channel-manage-page > .members .member {
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3%;
}

.channel-manage-page > .members .member.odd {
  position: relative;
  z-index: 0;
}
.channel-manage-page > .members .member.odd::before {
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

.channel-manage-page > .members .member > div {
  gap: 1rem;
}
</style>
