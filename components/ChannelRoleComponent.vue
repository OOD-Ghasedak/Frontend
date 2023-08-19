<template>
  <div v-if="shouldShow" class="role row">
    <img :src="getImageSrc(roleConfig.icon)" class="image-sized--1">
    <h5>{{ roleConfig.title }}</h5>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { ChannelRole } from '~/models'

interface RoleConfig {
  icon: string;
  title: string;
}

const RoleConfigs: Partial<{[key in ChannelRole]: RoleConfig}> = {
  [ChannelRole.OWNER]: { icon: 'owner', title: 'صاحب' },
  [ChannelRole.ADMIN]: { icon: 'admin', title: 'مدیر' },
  [ChannelRole.SPECIAL_MEMBER]: { icon: 'special-member', title: 'عضو ویژه' }
}

@Component
export default class ChannelRoleComponent extends Vue {
    @Prop() readonly role: ChannelRole

    get roleConfig (): RoleConfig {
      return RoleConfigs[this.role]
    }

    get shouldShow (): boolean {
      return this.role !== ChannelRole.MEMBER
    }

    getImageSrc (roleIcon: string) {
      return require(`@/static/images/channel-roles/${roleIcon}.svg`)
    }
}
</script>

<style>
.role {
  gap: 5px;
}
</style>
