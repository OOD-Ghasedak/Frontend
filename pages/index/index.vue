<template>
  <div class="welcome-page">
    <center>
      <div class="header">
        به شبکه اجتماعی
        <img src="@/static/images/logo-withtypography.svg" alt="Ghasedak Logo" class="logo-withtypography">
        خوش آمدید
      </div>
    </center>
    <div class="top-illustration">
      <img src="@/static/images/top-welcome-illustration.svg" alt="Two women working with their phone">
    </div>
    <div class="intro-boxes">
      <div class="top-intro">
        <div class="top-intro-box intro-box">
          <img src="@/static/images/intro-top.svg" alt="Share with people in channels" class="top-intro-icon">
          محتوای خود را در کانال‌های خود به اشتراک بگذارید
        </div>
      </div>
      <div class="middle-intro">
        <div class="middle-intro-box intro-box">
          <img src="@/static/images/cash.svg" alt="Monetize your channel" class="middle-intro-icon">
          با ایجاد کانال، کسب درآمد کنید
        </div>
      </div>
      <div class="bottom-intro">
        <div class="bottom-intro-box intro-box">
          <img src="@/static/images/join.svg" alt="Find your favorite channels" class="bottom-intro-icon">
          کانال‌های مورد علاقه خود را دنبال کنید
        </div>
      </div>
    </div>
    <center>
      <div class="actions">
        <div class="signup-button" @click="goToSignUpPage">
          <p class="signup-button-text">
            شروع کنید
          </p>
          <img src="@/static/images/chevron-left.svg" alt="Back" class="signup-button-icon">
        </div>
        <div class="signin-section">
          <p class="signin-section-text">
            اکانت دارید؟
          </p>
          <a href="" class="signin-button" @click.prevent="goToLoginPage">وارد شوید</a>
        </div>
      </div>
    </center>
    <div class="bottom-illustration">
      <img src="@/static/images/bottom-welcome-illustration.svg" alt="Woman lying on phone">
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import RootComponent from '~/utils/rootComponent'

@Component
export default class WelcomePage extends RootComponent {
  goToSignUpPage () {
    this.$router.push({ name: 'SignUpPage' })
  }

  goToLoginPage () {
    this.$router.push({ name: 'LoginPage' })
  }
}
</script>
<router>
  {name: "WelcomePage"}
</router>

<style>
.welcome-page {
  font-size: 62.5%;
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Yekan Bakh';
  margin: 0 0;
}

.header {
  margin-top: 40px;
  font-size: 4.9rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo-withtypography {
  margin: 0 40px;
  vertical-align: middle;
  width: 200px;
}

.top-illustration {
  position: fixed;
  top: 150px;
  left: 0px;
  max-width: 100%;
  height: auto;
  width: auto\9;
  /* ie8 */
}

.bottom-illustration {
  position: fixed;
  bottom: 100px;
  left: 80px;
  max-width: 100%;
  height: auto;
  width: auto\9;
  /* ie8 */
}

.intro-boxes {
  width: 90%;
  margin-right: 10px;
}

.intro-box {
  border-radius: 1rem;
  padding: 1rem 6rem;
  text-align: center;
  position: relative;
  font-size: 3.5rem;
  font-weight: 700;
  width: fit-content;
}

.top-intro {
  margin-top: 60px;
  display: flex;
  justify-content: right;
  margin-right: 4px;
}

.top-intro-box {
  background-color: var(--top-color-7);
  color: var(--top-color-1);
}

.top-intro-icon {
  position: absolute;
  top: -10px;
  right: -250px;
  width: 50%;
  height: 50%;
}

.middle-intro {
  margin-top: 60px;
  display: flex;
  justify-content: left;
  justify-self: left;
  margin-right: 150px;
  /* margin-left: 300px; */
}

.middle-intro-box {
  background-color: var(--secondary-color-7);
  color: var(--secondary-color-1);
}

.middle-intro-icon {
  position: absolute;
  top: -10px;
  left: -150px;
  width: 50%;
  height: 50%;
}

.bottom-intro {
  margin-top: 60px;
  margin-right: 20px;
  display: flex;
  justify-content: right;
  /* margin-right: 100px; */
}

.bottom-intro-box {
  background-color: var(--top-color-7);
  color: var(--top-color-1);
}

.bottom-intro-icon {
  position: absolute;
  top: -12px;
  right: -200px;
  width: 50%;
  height: 50%;
}

.signup-button {
  align-items: center;
  align-content: center;
  align-self: center;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 150px;
  padding: 10px 10px;
  background-color: var(--top-color-7);
  border-radius: 8px;
  border-color: var(--top-color-1);
  border-style: solid;
  cursor: pointer;
}

.signup-button-text {
  color: var(--top-color-1);
  font-size: 1.5rem;
  align-self: center;
  font-family: 'Yekan Bakh Fat';
  margin: 0px;
}

.signup-button-icon {
  align-self: center;
  margin-right: 20px;
}

.signin-section {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
}

.signin-section-text {
  font-family: 'Yekan Bakh Fat';
  font-size: 1.9rem;
  color: var(--top-color-1);
  margin-left: 5px;
  text-align: center;
}

.signin-button {
  font-family: 'Yekan Bakh Fat';
  font-size: 1.9rem;
  color: var(--top-color-5);
  align-self: center;
}
</style>
