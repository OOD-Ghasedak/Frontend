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

    <!-- define sub modal -->

    <b-modal centered visible size="lg" class="buy-sub">
      <template #default>
        <div class="modal-main">
          <div class="modal-body-title">
            <h1 class="modal-title-text">
              <center>تعریف اشتراک</center>
            </h1>
          </div>

          <div class="modal-body-define-sub">
            <div class="sub-input-div">
              <p class="sub-month-title">
                ۱
              </p>
              <input id="" type="number" name="1month" placeholder="هزینه اشتراک ۱ ماهه (تومان)">
            </div>
            <div class="sub-input-div">
              <p class="sub-month-title">
                ۳
              </p>
              <input id="" type="number" name="3month" placeholder="هزینه اشتراک ۳ ماهه (تومان)">
            </div>
            <div class="sub-input-div">
              <p class="sub-month-title">
                ۶
              </p>
              <input id="" type="number" name="6month" placeholder="هزینه اشتراک ۶ ماهه (تومان)">
            </div>
            <div class="sub-input-div">
              <p class="sub-month-title">
                ۱۲
              </p>
              <input id="" type="number" name="12month" placeholder="هزینه اشتراک ۱۲ ماهه (تومان)">
            </div>
          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="ok-button">
          <button class="edit secondary-button-2">
            <h6>{{ ' تعریف اشتراک' }}</h6>
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
