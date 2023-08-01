<template>
  <div class="main">
    <NuxtChild />
    <b-modal id="error" hide-footer title="خطا">
      <template #modal-title>
        <div>
          خطا
        </div>
      </template>
      <template #default>
        <div style="margin: auto;">
          {{ error }}
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class IndexPage extends Vue {
  error: string = ''
  showError (error: string) {
    this.error = error
    this.$bvModal.show('error')
  }

  mounted () {
    this.$nuxt.showError = this.showError
  }
}
</script>

<style>
@import "~/font/css/style.css";
@import "~/stylesheets/index.css";

:root {
  --white: white;
  --primary-color-1: #5c4f8f;
  --primary-color-2: #695aa5;
  --primary-color-3: #9681eb;
  --primary-color-4: #a896ee;
  --primary-color-5: #c2b6f3;
  --primary-color-6: #d4cbf7;
  --primary-color-7: #f5f2fd;
  --secondary-color-1: #2a7e87;
  --secondary-color-2: #30919b;
  --secondary-color-3: #45cfdd;
  --secondary-color-4: #65d7e3;
  --secondary-color-5: #93e3eb;
  --secondary-color-6: #b3ebf1;
  --secondary-color-7: #ecfafc;
  --top-color-1: #3e1874;
  --top-color-2: #471b85;
  --top-color-3: #6527be;
  --top-color-4: #7f4cc9;
  --top-color-5: #a682d9;
  --top-color-6: #c0a6e4;
  --top-color-7: #f0e9f9;
  --warning-color-1: #998439;
  --warning-color-2: #b09741;
  --warning-color-3: #fbd85d;
  --warning-color-4: #fcdf79;
  --warning-color-5: #fde8a1;
  --warning-color-6: #fdefbd;
  --warning-color-7: #fffbef;
  --error-color-1: #ef6262;
}

:root {
  --medium-font-size: 600;
  --regular-font-size: 400;
}

html,
body,
#__nuxt,
#__layout,
.main {
  background-color: var(--white);
  color: var(--primary-text-color);
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 200px;
  min-height: 300px;
  justify-content: center;
  /*background-color: white;*/
}

body {
  max-width: 1440px;
  max-height: 1024px;
  position: relative;
}
</style>
