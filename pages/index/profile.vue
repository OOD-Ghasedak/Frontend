<template>
  <div class="wrapper">
    <button type="button" class="back-btn">
      <img src="public/images/back.svg" alt="back arrow">
      <h5 class="back" style="color: #3e1874">بازگشت</h5>
    </button>
    <div class="profile-intro">
      <img src="public/images/profile-pic.svg" alt="Profile picture">
      <div class="profile-name">
        <h5>قاصد</h5>
        <div class="profile-username">
          <a href="#"><img src="public/images/edit.svg" alt="verified" class="edit-btn"></a>
          <h5 class>@mammad</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class ProfilePage extends Vue {

}
</script>

<style>
.wrapper {
  font-family: "Yekan Bakh";
  position: relative;
}

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
  vertical-align: middle;
}

.profile-intro {
  gap: 10em;
}

.profile-username {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

.edit-btn {
  width: 20px;
  height: 20px;
}
</style>
