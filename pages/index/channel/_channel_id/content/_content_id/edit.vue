<template>
  <div class="channel-edit-content-page">
    <BackButton />
    <div class="channel-info">
      <img src="@/static/images/ghased.svg" alt="" class="channel-picture">
      <h5 class="channel-title">بهترین کانال دنیا</h5>
    </div>
    <div class="title">
      <h1 class="text-centered">
        {{ 'ویرایش محتوا' }}
      </h1>
    </div>
    <div class="main-body">

      <div class="input-box">
        <div class="input-title-div">
          <h5 class="input-title">
            عنوان*
          </h5>
        </div>
        <div class="sub-input-div">
          <img src="@/static/images/h.svg" alt="" class="input-icon">
          <input type="text" name="1month" id="" placeholder="عنوان محتوا را وارد کنید...">
        </div>
      </div>

      <div class="input-box">
        <div class="input-title-div">
          <h5 class="input-title">
            خلاصه‌ای از محتوا را اینجا بنویسید
          </h5>
          <p>این خلاصه را تمامی اعضا(عادی و ويژه) می‌توانند مشاهده کنند.</p>
        </div>
        <div class="sub-input-div">
          <img src="@/static/images/paragraph.svg" alt="" class="input-icon">
          <input type="text" name="1month" id="" placeholder="خلاصه محتوا را وارد کنید...">
        </div>
      </div>

      <div class="input-box">
        <div class="input-title-div">
          <h5 class="input-title">
            محتوا
          </h5>
          <p>این محتوا را فقط اعضای ویژه (در صورت پولی بودن محتوا) می‌توانند ببینند.</p>
        </div>
        <div class="sub-input-div">
          <img src="@/static/images/doc.svg" alt="" class="input-icon">
          <textarea type="text" name="1month" id="" placeholder="متن مورد نظر خود را وارد کنید.">
          </textarea>
        </div>
      </div>

      <div class="file-input-div">
        <div class="input-title-div">
          <h5 class="input-title">
            فایل خود را بارگذاری کنید.
          </h5>
        </div>
        <input type="file">
      </div>

      <!-- Rounded switch -->
      <div class="make-financial">
        <!-- Rounded switch -->
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>

        <div class="premium-sign row">
          <img class="image-sized--1" src="@/static/images/dollar-green.svg">
          <p class="text-centered">
            {{ 'محتوای پولی' }}
          </p>
        </div>
        <div class="sub-input-div">
          <img src="@/static/images/paper-money.svg" alt="" class="input-icon">
          <input type="number" name="1month" id="" placeholder="قیمت">
        </div>

      </div>


      <button class="secondary-button horizontally-centered">
        <h2>{{ 'انتشار' }}</h2>
      </button>

    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { ChannelContent, ChannelContentType } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelEditContentPage extends RootComponent {
  content: ChannelContent = {
    id: '1',
    title: 'متن آهنگ ساسی',
    price: 10000,
    summary: 'متن آهنگ ساسی',
    content_type: ChannelContentType.TEXT,
    complete_content: {
      text: 'صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا صدای من رو میشنوید از کالیفرنیا آمریکا'
    },
    is_premium: false
  }

  get contentId(): string {
    return this.$route.params.content_id
  }

  get channelId(): string {
    return this.$route.params.channel_id
  }

  mounted() {
    // get channel
    // get contents
  }
}
</script>
<router>
{name: "ChannelEditContentPage"}
</router>

<style>
.channel-add-content-page {
  height: 100%;
}

.text-centered {
  font-family: 'Yekan Bakh Fat';
}

.channel-info {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40px;
  right: 40px;
  align-items: center;
}

.title {
  margin-top: 80px;
}

.channel-picture {
  width: 50px;
  margin-left: 10px;
}

.channel-title {
  width: 150px;
  font-weight: 500;
}

.input-box {
  margin-top: 40px;
}

.input-title {
  text-align: center;
}

.input-icon {
  width: 15px;
  margin-left: 10px;
}

.sub-input-div {
  margin-right: 50px;
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.input-title-div {
  text-align: center;
  align-items: center;
}

input {
  flex: 1;
  font-size: 1.2rem;
}

textarea {
  flex: 1;
  border: none;
  border-bottom: 1px solid var(--top-color-1);
}

textarea::placeholder {
  color: var(--top-color-5);
  justify-content: end;
}

input::placeholder {
  font-size: 1rem;
  font-weight: 400;
  color: var(--top-color-5);
}

.file-input-div {
  margin-top: 40px;
  margin-right: 50px;
  margin-left: 50px;
  height: 100px;
  align-items: center;
  justify-content: center;
}

.file-input-div input {
  margin-top: 20px;
  background-color: var(--top-color-7);
  border-style: dashed;
  border-width: 1px;
  border-color: var(--top-color-1);
  border-radius: 10px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  margin-left: 10px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.make-financial {
  background-color: var(--secondary-color-6);
  margin-right: 50px;
  margin-left: 50px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
