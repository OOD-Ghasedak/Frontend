<template>
  <div class="create-channel-define-subscription-page">
    <BackButton />

    <div class="page-title">
      <h1 class="page-title-text">تعریف اشتراک</h1>
      <p class="page-title-name">کانال عالی من</p>
    </div>
    <div class="radios">
      <form class="fav-sub-section">
        <div class="radio-div">
          <input type="radio" name="fav_sub" value="nosub">
          <p class="sub-selection-text">می‌خواهم تمامی مطالب کانالم رایگان باشد</p>
        </div>
        <div class="radio-div">
          <input type="radio" name="fav_sub" value="withsub">
          <p class="sub-selection-text">می‌خواهم برای کانالم اشتراک تعریف کنم و محتوای پولی در کانالم منتشر کنم.</p>
        </div>
      </form>
    </div>

    <div class="sub-inputs">
      <input type="number" name="hello" id="" placeholder="۱ ماهه" class="sub-input">
      <input type="number" name="hello" id="" placeholder="۳ ماهه" class="sub-input">
      <input type="number" name="hello" id="" placeholder="۶ ماهه" class="sub-input">
      <input type="number" name="hello" id="" placeholder="۱۲ ماهه" class="sub-input">
    </div>
    <div class="submit-button">
      <button class="secondary-button">
        <h2>{{ 'تایید' }}</h2>
      </button>
    </div>


    <!-- change bio modal -->
    <!-- <b-modal centered visible size="lg" class="buy-sub">
      <template #default>
        <div class="modal-main">
          <div class="modal-body-title">
            <h1 class="modal-title-text">
              <center>بیوگرافی کانال</center>
            </h1>
            <h6 class="title-description">بیوگرافی جدید را وارد کنید.</h6>
          </div>

          <div class="modal-body-change-bio">
            <img src="@/static/images/paragraph.svg" alt="" class="paragraph-icon">
            <textarea placeholder="بیوگرافی" class="bio-input">
              </textarea>
          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="ok-button">
          <button class="primary-button">
            <h5>{{ 'تغییر بیوگرافی' }}</h5>
            <img src="@/static/images/change-bio.svg" class="image-sized--2">
          </button>
        </div>
      </template>
      <template #modal-header-close>
        <div class="close-button">
          <h5 class="close-text">
            انصراف
          </h5>
          <img src="@/static/images/close.svg" alt="" class="close-icon">
        </div>
      </template>
    </b-modal> -->

    <!-- remove manager modal -->
    <!-- <b-modal centered visible size="lg" class="buy-sub">
      <template #default>
        <div class="modal-main">
          <div class="modal-body-title">
            <h1 class="modal-title-text modal-title-warning">
              <center>عزل مدیر</center>
            </h1>
          </div>

          <div class="modal-body-remove-admin">
            <h5 class="no-access-text">آیا مطمئن هستید؟</h5>
          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="ok-button">
          <button class="error-button">
            <h5>{{ 'عزل' }}</h5>
            <img class="image-sized--2" src="@/static/images/leave-red.svg">
          </button>
        </div>
      </template>
      <template #modal-header-close>
        <div class="close-button">
          <h5 class="close-text">
            انصراف
          </h5>
          <img src="@/static/images/close.svg" alt="" class="close-icon">
        </div>
      </template>
    </b-modal> -->

    <!-- no access modal -->

    <!-- <b-modal centered visible size="lg" class="buy-sub">
      <template #default>
        <div class="modal-main">
          <div class="modal-body-title">
            <h1 class="modal-title-text modal-title-warning">
              <center>عدم دسترسی!</center>
            </h1>
          </div>

          <div class="modal-body-no-access">

            <h5 class="no-access-text">شما به این محتوا دسترسی ندارید.
              می‌توانید با خرید اشتراک یا
              خرید محتوا به صورت جداگانه،
              به این محتوا دسترسی پیدا کنید.</h5>

          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="ok-button">
          <button class="edit secondary-button-2">
            <h6>{{ ' خرید محتوا' }}</h6>
            <img class="image-sized--1" src="@/static/images/paper-money.svg">
          </button>
          <button class="edit secondary-button-2">
            <h6>{{ ' خرید اشتراک' }}</h6>
            <img class="image-sized--1" src="@/static/images/paper-money.svg">
          </button>
        </div>
      </template>
      <template #modal-header-close>
        <div class="close-button">
          <h5 class="close-text">
            انصراف
          </h5>
          <img src="@/static/images/close.svg" alt="" class="close-icon">
        </div>
      </template>
    </b-modal> -->




    <!-- buy content modal -->

    <!-- <b-modal centered visible size="lg" class="buy-sub">
      <template #default>
        <div class="modal-main">
          <div class="modal-body-title">
            <h1 class="modal-title-text">
              <center>خرید محتوا</center>
            </h1>
            <h6>صدای هنرمندان فاخر</h6>
          </div>

          <div class="modal-body-buy-content">

            <div class="price-content">
              <h4>۴۰۰۰۰۰۰</h4>
              <p class="sub-item-months">تومان</p>
            </div>

            <div class="wallet-pane">
              <div class="wallet-pane-header">
                <h6 class="wallet-text">کیف<br>پول</h6>
                <div class="wallet-balance">
                  <h4 class="balance-text">موجودی</h4>
                  <p>۲۰۰۰۰۰۰تومان</p>
                </div>
                <img src="@/static/images/wallet.svg" alt="" class="wallet-icon">
              </div>
              <div class="wallet-pane-note">
                <p>موجودی کافی</p>

                <h4 class="trans-text">عملیات</h4>
                <a href=""></a>
                <b-button v-b-toggle.collapse-wallet class="expand-button" style="padding: 5px;">
                  <img src="@/static/images/double-arrow-down.svg" alt="" class="down-icon">
                </b-button>

              </div>
              <b-collapse id="collapse-wallet">
                <div class="input-div">
                  <input type="number" placeholder="مقدار" class="deposit-input">
                </div>

                <div class="depost-button-div">
                  <button class="deposit-button">
                    <h3 class="secondary">
                      {{ 'واریز' }}
                    </h3>
                    <img src="@/static/images/arrow-down.svg">
                  </button>
                </div>

              </b-collapse>
            </div>
          
          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="ok-button">
          <button class="edit secondary-button-2">
            <h6>{{ ' خرید محتوا' }}</h6>
            <img class="image-sized--1" src="@/static/images/paper-money.svg">
          </button>
        </div>
      </template>
      <template #modal-header-close>
        <div class="close-button">
          <h5 class="close-text">
            انصراف
          </h5>
          <img src="@/static/images/close.svg" alt="" class="close-icon">
        </div>
      </template>
    </b-modal> -->

    <!-- buy sub modal -->

    <!-- <b-modal centered visible size="lg" class="buy-sub">

      <template #default>
        <div class="modal-main">
          <div class="modal-body-title">
            <h1 class="modal-title-text">
              <center>خرید اشتراک</center>
            </h1>
          </div>

          <div class="modal-body-me">

            <div class="wallet-pane">
              <div class="wallet-pane-header">
                <h6 class="wallet-text">کیف<br>پول</h6>
                <div class="wallet-balance">
                  <h4 class="balance-text">موجودی</h4>
                  <p>۲۰۰۰۰۰۰تومان</p>
                </div>
                <img src="@/static/images/wallet.svg" alt="" class="wallet-icon">
              </div>
              <div class="wallet-pane-note">
                <p>موجودی کافی</p>

                <h4 class="trans-text">عملیات</h4>
                <a href=""></a>
                <b-button v-b-toggle.collapse-wallet class="expand-button" style="padding: 5px;">
                  <img src="@/static/images/double-arrow-down.svg" alt="" class="down-icon">
                </b-button>

              </div>
              <b-collapse id="collapse-wallet">
                <div class="input-div">
                  <input type="number" placeholder="مقدار" class="deposit-input">
                </div>

                <div class="depost-button-div">
                  <button class="deposit-button">
                    <h3 class="secondary">
                      {{ 'واریز' }}
                    </h3>
                    <img src="@/static/images/arrow-down.svg">
                  </button>
                </div>

              </b-collapse>
            </div>

            <div class="subs">
              <div class="sub-item-box">
                <div class="sub-item-title">
                  <h3 class="sub-item-month-number">
                    ۱
                  </h3>
                  <h6 class="sub-item-months">
                    ماهه
                  </h6>
                </div>
                <div class="sub-item-price">
                  <h3 class="sub-item-price-number">
                    ۲۰۰۰۰۰
                  </h3>
                  <p class="sub-item-toman">
                    تومان
                  </p>
                </div>
              </div>
              <div class="sub-item-box">
                <div class="sub-item-title">
                  <h3 class="sub-item-month-number">
                    ۱
                  </h3>
                  <h6 class="sub-item-months">
                    ماهه
                  </h6>
                </div>
                <div class="sub-item-price">
                  <h3 class="sub-item-price-number">
                    ۲۰۰۰۰۰
                  </h3>
                  <p class="sub-item-toman">
                    تومان
                  </p>
                </div>
              </div>
              <div class="sub-item-box">
                <div class="sub-item-title">
                  <h3 class="sub-item-month-number">
                    ۱
                  </h3>
                  <h6 class="sub-item-months">
                    ماهه
                  </h6>
                </div>
                <div class="sub-item-price">
                  <h3 class="sub-item-price-number">
                    ۲۰۰۰۰۰
                  </h3>
                  <p class="sub-item-toman">
                    تومان
                  </p>
                </div>
              </div>
              <div class="sub-item-box">
                <div class="sub-item-title">
                  <h3 class="sub-item-month-number">
                    ۱
                  </h3>
                  <h6 class="sub-item-months">
                    ماهه
                  </h6>
                </div>
                <div class="sub-item-price">
                  <h3 class="sub-item-price-number">
                    ۲۰۰۰۰۰
                  </h3>
                  <p class="sub-item-toman">
                    تومان
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </template>
      <template #modal-footer>
        <div class="ok-button">
          <button class="edit secondary-button-2">
            <h6>{{ 'تعریف اشتراک' }}</h6>
            <img class="image-sized--1" src="@/static/images/paper-money.svg">
          </button>
        </div>
      </template>
      <template #modal-header-close>
        <div class="close-button">
          <h5 class="close-text">
            انصراف
          </h5>
          <img src="@/static/images/close.svg" alt="" class="close-icon">
        </div>
      </template>
    </b-modal> -->
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import RootComponent from '~/utils/rootComponent'

@Component
export default class CreateChannelDefineSubscriptionPage extends RootComponent {
}
</script>
<router>
{name: "CreateChannelDefineSubscriptionPage"}
</router>

<style>
.modal-body-buy-content {
  align-items: center;
}

.price-content {
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-bottom: 20px;
}


.modal-header .close {
  margin-left: 0;
}

.close-button {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.close-icon {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 18px;
}

.close-text {
  color: var(--error-color);
  font-weight: 500;
}

.modal-title-text {
  font-family: 'Yekan Bakh Fat';
  font-size: 2.3rem;
}

.modal-body-me {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.modal-body-title {
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
}

.subs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.deposit-button {
  --button-color: var(--secondary-color-1);
  justify-content: center;
  margin-top: 10px;
}

.sub-item-box {
  border: solid;
  border-radius: 8px;
  border-color: var(--top-color-1);
  background-color: var(--pale-secondary-color-6);
}

.sub-item-title {
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-right: 5px;
}

.sub-item-month-number {
  font-family: 'Yekan Bakh Fat';
  font-size: 2.3rem;
  color: var(--top-color-1);
}

.sub-item-months {
  margin-bottom: 7px;
  margin-right: 3px;
  color: var(--top-color-5);
}

.sub-item-price {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 20px;
}

.sub-item-price-number {
  font-weight: 800;
  color: var(--top-color-3);
}

.sub-item-toman {
  margin-bottom: 5px;
  margin-right: 3px;
}

.wallet-pane {
  background-color: var(--pale-secondary-color-6);
  height: fit-content;
  border: solid;
  border-radius: 10px;
  border-color: var(--secondary-color-1);
  padding: 10px;
}

.wallet-pane-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* width: 150px; */
}

.wallet-balance {
  justify-content: center;
  align-items: center;
}

.balance-text {
  color: var(--secondary-color-2);
  font-weight: 500;
  font-size: 1.5rem;
}

.wallet-icon {
  width: 30px;
}

.wallet-pane-note {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.down-icon {
  width: 20px;
}

.expand-button {
  background-color: transparent;
  border: none;
}

.depost-button-div {
  justify-content: center;
}

.input-div {
  margin-top: 10px;
  margin-bottom: 10px;
}

.deposit-input {
  width: 200px;
  justify-content: center;
  justify-self: center;
  border-radius: 10px;
  font-size: 1rem;

  margin: auto;
  display: block;

}

.deposit-input::placeholder {
  font-size: 0.8rem;
  font-weight: 100;
}

.trans-text {
  margin-right: 25px;
}

.page-title {
  justify-content: center;
  align-items: center;
}

.page-title-text {
  font-family: 'Yekan Bakh Fat';
  margin-bottom: 20px;
}

.page-title-name {
  font-size: 1.8rem;
}

.radios {
  direction: rtl;
  align-items: start;

}

.radio-div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.sub-selection-text {
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--top-color-1);
}

.sub-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-left: 30px;
  margin-right: 30px;
}

.sub-input {
  font-size: 1.2rem;
  color: var(--top-color-1);
}

.sub-input::placeholder {
  font-size: 1rem;
  font-weight: 400;
  color: var(--top-color-5);
}

.ok-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
}

.submit-button {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
}

.modal-title-warning {
  color: var(--error-color);
}

.edit {
  margin-right: 10px;
}

.modal-body-no-access {
  align-items: center;
}


.modal-body-remove-admin {
  align-items: center;
}

.no-access-text {
  color: var(--error-color);
  width: 300px;
  text-align: center;
  align-items: center;
}

.title-description {
  margin-top: 10px;
}

.bio-input {
  border: none;
  flex: 1;
  margin-right: 10px;
}

.modal-body-change-bio {
  display: flex;
  flex-direction: row;
  align-items: start;
}

.paragraph-icon {
  width: 15px;
}
</style>
