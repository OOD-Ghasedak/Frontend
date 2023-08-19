<template>
  <div class="profile">
    <BackButton />
    <div class="profile-intro">
      <img class="image-sized-4 horizontally-centered" src="@/static/images/ghased.svg" alt="Profile picture">
      <div class="profile-name">
        <h5 class="text-centered">
          قاصد
        </h5>
        <div class="profile-username horizontally-centered row">
          <h5 class="username-field">
            {{ `@${profile.username}` }}
          </h5>
          <button style="margin-right: 5px;">
            <img class="image-sized--2" src="@/static/images/edit.svg" alt="verified">
          </button>
        </div>
      </div>
    </div>
    <div class="content row">
      <div class="user edit-form">
        <div class="email">
          <div class="see row">
            <img class="image-sized--1" src="@/static/images/email.svg">
            <h5>{{ profile.email || profile.phone_number }}</h5>
          </div>
          <div class="edit row">
            <h6>{{ 'شماره تلفن/ایمیل' }}</h6>
            <button style="margin-right: 5px;">
              <img class="image-sized--2" src="@/static/images/edit.svg" alt="verified">
            </button>
          </div>
        </div>
        <div class="password">
          <div class="see row">
            <img class="image-sized--1" src="@/static/images/key.svg">
            <h5>{{ '******' }}</h5>
            <img class="image-sized--2 vertically-centered" src="@/static/images/eye.svg">
          </div>
          <div class="edit row">
            <h6>{{ 'رمزعبور' }}</h6>
            <button style="margin-right: 5px;">
              <img class="image-sized--2" src="@/static/images/edit.svg" alt="verified">
            </button>
          </div>
        </div>
      </div>
      <div class="wallet edit-form">
        <div class="see row">
          <h2>{{ 'کیف پول' }}</h2>
          <div class="show-balance">
            <h2 class="secondary">
              {{ 'موجودی' }}
            </h2>
            <h5 class="secondary">
              {{ `${wallet.balance} ریال` }}
            </h5>
          </div>
          <img class="image-sized-1" src="@/static/images/wallet.svg">
        </div>
        <div class="edit horizontally-centered">
          <h3 class="text-centered">
            {{ 'عملیات' }}
          </h3>
          <input v-model="walletOperationMoney" placeholder="مقدار">
          <div class="actions row">
            <button class="withdraw-button" @click="deposit">
              <h3 class="error">
                {{ 'برداشت' }}
              </h3>
              <img src="@/static/images/arrow-up.svg">
            </button>
            <button class="deposit-button" @click="withdraw">
              <h3 class="secondary">
                {{ 'واریز' }}
              </h3>
              <img src="@/static/images/arrow-down.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="logout-button error-button" @click="logout">
      <h2>{{ 'خروج' }}</h2>
      <img src="@/static/images/logout.svg">
    </button>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import BackButton from '~/components/BackButton.vue'
import { Money, UserProfile, UserWallet } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component({
  components: { BackButton }
})
export default class ProfilePage extends RootComponent {
  profile: UserProfile = {
    username: 'sepehrkianian09',
    email: 'sepehrkianian09@gmail.com',
    phone_number: '09112245833'
  }

  wallet: UserWallet = {
    balance: 98000
  }

  walletOperationMoney: Money = 0

  mounted () {
    this.mainConfig.$facades.ghased.getProfile().then((profile) => {
      this.profile = profile
    })
    this.mainConfig.$facades.wallet.getWallet().then((wallet) => {
      this.wallet = wallet
    })
  }

  withdraw () {
    this.mainConfig.$facades.wallet.withdraw(this.walletOperationMoney)
  }

  deposit () {
    this.mainConfig.$facades.wallet.deposit(this.walletOperationMoney)
  }

  logout () {
    this.mainConfig.$facades.ghased.logout()
  }
}
</script>
<router>
  {name: "ProfilePage"}
</router>

<style>

.back-btn {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.back {
  margin: 0;
}

.back-btn img {
  height: 25px;
  width: 25px;
}

.profile-intro {
  height: 250px;
  justify-content: space-between;
}

.profile {
  height: 100%;
  justify-content: space-between;
  padding: 50px 4% 30px;
}

.profile-username > .username-field {
  margin-left: 5px;
  direction: ltr;
}

.email > .see > h5 {
  text-align: left;
    margin: 0 auto 0 0;
}

.edit-form {
  background-color: var(--top-color-7);
  border: 1px solid;
  border-radius: 10px;
}

.password > .see {
  justify-content: space-between;
}

.email > .see > img {
  margin-left: 5px;
}

.profile > .content {
  justify-content: space-around;
  flex-wrap: nowrap;
  gap: 30px;
}

.content > .user {
  padding: 20px 5%;
  justify-content: space-between;
}

.content > .user > div {
  gap: 8px;
}

.content > .user > div > div {
  flex-wrap: nowrap;
}

.content > .wallet {
  width: -webkit-fill-available;
}

.content > .wallet > .see {
  border-bottom: 1px solid;
  padding: 10px 4%;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.content > .wallet > .see > .show-balance {
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
}

.wallet > .edit {
  gap: 20px;
  padding: 10px 4%;
}

.wallet > .edit > .actions {
  justify-content: space-evenly;
}

.wallet > .edit > .actions > button {
  background: transparent;
  border-bottom: 2px solid var(--button-color);
  color: var(--button-color);
  gap: 5px;
}

.deposit-button {
  --button-color: var(--secondary-color-1);
}

.withdraw-button {
  --button-color: var(--error-color-1);
}

.wallet > .edit > input {
  font-size: 22px;
  border-radius: 10px;
  border: none;
}

.logout-button {
  width: fit-content;
  align-self: center;
  border-radius: 10px;
  padding: 7px 10px;
  align-items: center;
  gap: 10px;
  background-color: #fe2f2f;
}

</style>
