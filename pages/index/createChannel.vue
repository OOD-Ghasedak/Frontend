<template>
  <div class="create-channel-page">
    <BackButton />
    <h1>{{ 'ساخت کانال' }}</h1>
    <div class="choose-picture">
      <h3>{{ 'تصویر کانال' }}</h3>
      <div class="chose-picture circular image-sized-3">
        <h1>{{ '+' }}</h1>
      </div>
    </div>
    <div class="choose-name">
      <h3>{{ 'مخاطبین کانال شما را با چه اسمی خواهند شناخت؟' }}</h3>
      <input placeholder="نام کانال خود را وارد کنید...">
    </div>
    <div class="choose-description">
      <h3>{{ 'توضیحی مختصر در رابطه با کانال خود در بخش زیر وارد کنید.' }}</h3>
      <input placeholder="بیوگرافی کانال خود را وارد کنید...">
    </div>
    <button>
      <h2>{{ 'ادامه' }}</h2>
      <img src="@/static/images/next.svg" class="image-sized--2">
    </button>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import BackButton from '~/components/BackButton.vue'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: { BackButton }
})
export default class CreateChannelPage extends RootComponent {

}
</script>

<style>
.create-channel-page {
  align-items: center;
  height: 100%;
    justify-content: space-between;
    padding: 40px 0;
}

.create-channel-page > .choose-picture > .chose-picture {
  justify-content: center;
  align-items: center;
  background-color: var(--top-color-7)
}
</style>
