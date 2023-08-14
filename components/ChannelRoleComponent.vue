<template>
  <div class="role row">
    <img src="@/static/images/dollar-coin.svg" class="image-sized--1">
    <h5>{{ 'عضو ویژه' }}</h5>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { ChannelRole } from '~/models'

@Component
export default class ChannelRoleComponent extends Vue {
    @Prop() readonly role: ChannelRole
}
</script>

<style>
.role {
  gap: 5px;
}
</style>
