<template>
  <div class="create-channel-define-subscription-page">
    <BackButton />

    <div class="page-title">
      <h1 class="page-title-text">
        تعریف اشتراک
      </h1>
      <p class="page-title-name">
        کانال عالی من
      </p>
    </div>
    <div class="radios">
      <form class="fav-sub-section">
        <div class="radio-div">
          <input type="radio" name="fav_sub" value="nosub">
          <p class="sub-selection-text">
            می‌خواهم تمامی مطالب کانالم رایگان باشد
          </p>
        </div>
        <div class="radio-div">
          <input type="radio" name="fav_sub" value="withsub">
          <p class="sub-selection-text">
            می‌خواهم برای کانالم اشتراک تعریف کنم و محتوای پولی در کانالم منتشر کنم.
          </p>
        </div>
      </form>
    </div>

    <div class="sub-inputs">
      <input id="" type="number" name="hello" placeholder="۱ ماهه" class="sub-input">
      <input id="" type="number" name="hello" placeholder="۳ ماهه" class="sub-input">
      <input id="" type="number" name="hello" placeholder="۶ ماهه" class="sub-input">
      <input id="" type="number" name="hello" placeholder="۱۲ ماهه" class="sub-input">
    </div>
    <div class="submit-button">
      <button class="secondary-button">
        <h2>{{ 'تایید' }}</h2>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import RootComponent from '~/utils/rootComponent'

@Component
export default class CreateChannelDefineSubscriptionPage extends RootComponent {
}
</script>
<router>
{name: "CreateChannelDefineSubscriptionPage"}
</router>

<style>

</style>
