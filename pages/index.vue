<template>
  <div class="main">
    <NuxtChild />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class IndexPage extends Vue {
  mounted () {
  }
}
</script>

<style>
@import "~/font/css/style.css";

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

div {
  display: flex;
}

button {
  border-radius: 15px;
  /*font-size: 5vw;*/
  /*font-weight: 600;*/
  min-height: 48px;
  height: 48px;
  border-width: 0;
  background: transparent;
  color: var(--primary-color-1);
  font-size: 41px;
}

h1, h2, h3, h4, h5, h6, p {
  direction: ltr;
  width: 100%;
  align-self: center;
  margin-bottom: 0;
}

h1 {
  font-size: 49px;
}

h6 {
  font-size: 29px;
}

input, p {
  font-size: 20px;
}
input {
  border: none;
    height: 56px;
    padding: 5px 10px;
    border-bottom: 1px solid;
    outline: none;
    border-color: var(--top-color-1);
    color: var(--top-color-5);
}

/* hide number input arrow */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

</style>
