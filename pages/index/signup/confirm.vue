<template>
  <div class="signup-confirm">
    <BackButton />
    <h1>{{ 'تایید اطلاعات' }}</h1>
    <h3 class="text-centered">
      {{ `کد ۴رقمی ارسال‌شده به ${email} را وارد کنید.` }}
    </h3>
    <CodeInput class-name="verification-code" :fields="4" type="number" @complete="verify" />
    <button>
      <h2>{{ 'تایید' }}</h2>
      <img src="@/static/images/next.svg" class="image-sized--2">
    </button>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import CodeInput from 'vue-verification-code-input'
import BackButton from '~/components/BackButton.vue'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: { BackButton, CodeInput }
})
export default class ConfirmSignUpPage extends RootComponent {
  email: string = 'sepehrkianian@gmail.com'
  verify (verifyCode: string) {
    this.mainConfig.$facades.visitingUser.signUpVerify(verifyCode)
      .then(() => {
        this.$router.push('CompleteSignUpPage')
      })
  }
}
</script>

<style>
.signup-confirm {
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
}

.verification-code {
    width: fit-content !important;
}

.verification-code > .react-code-input {
    direction: ltr;
    gap: 40px;
    flex-direction: row;
}

.verification-code > .react-code-input > input {
    border-radius: 5px !important;
    border: 1px solid var(--top-color-1) !important;
}
</style>
