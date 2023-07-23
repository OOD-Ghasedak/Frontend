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
  --secondary-color-rgb: 246, 117, 56;
  --tertiary-color: #ffffff;
  --primary-text-color: #113f70;
  --primary-text-color-rgb: 17, 63, 112;
  --secondary-text-color: #88a4c2;
  --secondary-text-color-rgb: 136, 164, 194;
  --disable-button-color: #faebd7;
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

button {
  border-radius: 15px;
  /*font-size: 5vw;*/
  /*font-weight: 600;*/
  min-height: 48px;
  height: 48px;
  border-width: 0;
  background: transparent;
}

h1, h2, h3, h4, h5, h6, p {
  direction: ltr;
}

h1 {
  font-size: 49px;
}

h6 {
  font-size: 29px;
}

@media (min-aspect-ratio: 14/10) {

  p {
    margin-bottom: 0;
    align-self: center;
    width: 100%;
    /*font-size: 2.78vw; !* 10px *!*/
    font-size: min(16px, calc(2.78 * 6px + 1.25vh) / 2);
  }

  h2 {
    /*font-size: 5.55vw; !* 20px *!*/
    font-size: min(27px, calc((5.55 * 6px + 2.5vh) / 2));
  }

  h3 {
    /*font-size: 5vw; !* 18px *!*/
    font-size: min(24px, calc(5 * 6px + 2.25vh) / 2);
  }

  h4 {
    /*font-size: 4.44vw; !* 16px *!*/
    font-size: min(21px, calc(4.44 * 6px + 2vh) / 2);
  }

  h5 {
    /*font-size: 3.89vw; !* 14px *!*/
    font-size: min(18px, calc(3.89 * 6px + 1.75vh) / 2);
  }

  h6 {
    /*font-size: 3.33vw; !* 12px *!*/
    font-size: min(16px, calc(3.33 * 6px + 1.5vh) / 2);
  }
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

@media (max-aspect-ratio: 14/10) {
  p {
    margin-bottom: 0;
    align-self: center;
    width: 100%;
    /*font-size: 2.78vw; !* 10px *!*/
    font-size: min(14px, calc(2.78vw + 1.25vh) / 2);
  }

  h2 {
    /*font-size: 5.55vw; !* 20px *!*/
    font-size: min(27px, calc((5.55vw + 2.5vh) / 2));
  }

  h3 {
    /*font-size: 5vw; !* 18px *!*/
    font-size: min(24px, calc(5vw + 2.25vh) / 2);
  }

  h4 {
    /*font-size: 4.44vw; !* 16px *!*/
    font-size: min(21px, calc(4.44vw + 2vh) / 2);
  }

  h5 {
    /*font-size: 3.89vw; !* 14px *!*/
    font-size: min(18px, calc(3.89vw + 1.75vh) / 2);
  }

  h6 {
    /*font-size: 3.33vw; !* 12px *!*/
    font-size: min(16px, calc(3.33vw + 1.5vh) / 2);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  width: 100%;
  align-self: center;
  margin-bottom: 0;
}

.colored {
  color: var(--secondary-color);
}

div {
  display: flex;
}
</style>
