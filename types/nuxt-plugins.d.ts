// 1. Make sure to import 'vue' before declaring augmented types

import { NuxtApp } from '@nuxt/types/app' // eslint-disable-line @typescript-eslint/no-unused-vars
// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module '@nuxt/types/app' {
    // 3. Declare augmentation for Vue
    interface NuxtApp {
        showError: (error: string) => void;
        showMessage: (message: string) => void;
    }
}
