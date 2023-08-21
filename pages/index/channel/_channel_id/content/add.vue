<template>
  <div class="channel-add-content-page">
    <BackButton />
    <div class="channel-info">
      <img src="@/static/images/ghased.svg" alt="" class="channel-picture">
      <h5 class="channel-title">بهترین کانال دنیا</h5>
    </div>
    <div class="title">
      <h1 class="text-centered">
        {{ 'افزودن محتوا' }}
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


    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ChannelAddContentPage extends RootComponent {

}
</script>
<router>
{name: "ChannelAddContentPage"}
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
</style>
