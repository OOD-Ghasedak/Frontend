<template>
  <b-modal :id="modalId" centered size="lg" class="buy-sub">
    <template #default>
      <div class="modal-main">
        <div class="modal-body-title">
          <h1 class="modal-title-text">
            <center>تعریف اشتراک</center>
          </h1>
        </div>

        <div class="modal-body-define-sub">
          <div v-for="(subscription, i) in newSubscriptions" :key="`subscription-${i}`" class="sub-input-div">
            <p class="sub-month-title">
              {{ subscriptionLengthRepresentation(subscription) }}
            </p>
            <input v-model="subscription.price" type="number" name="1month" placeholder="هزینه اشتراک ۱ ماهه (تومان)">
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="ok-button">
        <button class="edit secondary-button-2" @click="editSubscriptions">
          <h6>{{ `${hasSubscription ? 'ویرایش' : 'تعریف'} اشتراک` }}</h6>
          <img class="image-sized--1" src="@/static/images/paper-money.svg">
        </button>
      </div>
    </template>
    <template #modal-header-close>
      <div class="close-button">
        <h5 class="close-text">
          انصراف
        </h5>
        <img src="@/static/images/close.svg" alt="" class="close-icon">
      </div>
    </template>
  </b-modal>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Subscription, SubscriptionDuration, subscriptionLengthNumbers, SubscriptionModel } from '~/models'
import RootComponent from '~/utils/rootComponent'

const getNewSubscription: () => SubscriptionModel[] = () => {
  const newSubscriptions: SubscriptionModel[] = []
  console.log('duration choice values')

  for (const value in SubscriptionDuration) {
    console.log(value)

    newSubscriptions.push({ price: 0, duration_choice: SubscriptionDuration[value] })
  }
  return newSubscriptions
}

const clone: <T>(data: T) => T = (data) => {
  return JSON.parse(JSON.stringify(data))
}

const toSubscriptionModel: (s: Subscription) => SubscriptionModel = (s: Subscription) => {
  return { price: s.price, duration_choice: s.duration_choice }
}

  @Component
export default class EditSubscription extends RootComponent {
  readonly modalId: string = 'edit-subscription'
  show (subscriptions: Subscription[]) {
    this.subscriptions = subscriptions
    this.newSubscriptions = this.hasSubscription ? clone(this.subscriptions).map(toSubscriptionModel) : getNewSubscription()
    this.$bvModal.show(this.modalId)
  }

  get channelId () {
    return this.$route.params.channel_id
  }

  get hasSubscription () {
    return this.subscriptions.length !== 0
  }

  subscriptions: Subscription[] = []
  newSubscriptions: SubscriptionModel[] = []
  subscriptionLengthRepresentation (subscription: SubscriptionModel) {
    return subscriptionLengthNumbers[subscription.duration_choice]
  }

  editSubscriptions () {
    this.mainConfig.$facades.channelOwner.defineSubscription(this.channelId, this.newSubscriptions)
      .then(() => { this.$router.go(0) })
  }
}
</script>

  <style>
  </style>
