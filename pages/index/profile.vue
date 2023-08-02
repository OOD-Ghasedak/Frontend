<template>
  <div class="profile">
    <button style="display: none;" type="button" class="back-btn">
      <img src="public/images/back.svg" alt="back arrow">
      <h5 class="back" style="color: #3e1874">
        بازگشت
      </h5>
    </button>
    <div class="profile-intro">
      <img class="image-sized-4 horizontally-centered" src="@/static/images/ghased.svg" alt="Profile picture">
      <div class="profile-name">
        <h5 class="text-centered">
          قاصد
        </h5>
        <div class="profile-username horizontally-centered row">
          <h5 class="username-field">
            {{ `@${profile.user_name}` }}
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
            <button @click="deposit">
              <h3 class="error">
                {{ 'برداشت' }}
              </h3>
            </button>
            <button @click="withdraw">
              <h3 class="secondary">
                {{ 'واریز' }}
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Money, UserProfile, UserWallet } from '~/models'
import RootComponent from '~/utils/rootComponent'

@Component
export default class ProfilePage extends RootComponent {
  profile: UserProfile = {
    user_name: 'sepehrkianian09',
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
}
</script>

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
  /* gap: 10em; */
  height: 250px;
}

.profile-username {

}

.profile-username > .username-field {
  margin-left: 5px;
}

.profile > .content {
  justify-content: space-around;
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

.content > .user {
  padding: 20px 5%;
}

.password > .see {
  justify-content: space-between;
}

.email > .see > img {
  margin-left: 5px;
}

.content > .user {
  justify-content: space-around;
}

.content > .wallet > .see {
  border-bottom: 1px solid;
  padding: 10px 4%;
  align-items: center;
}

.wallet > .edit {
  gap: 20px;
  padding: 10px 4%;
}

.wallet > .edit > .actions {
  justify-content: center;
}

.wallet > .edit > input {
  font-size: 22px;
  border-radius: 10px;
  border: none;
}
</style>
