<template>
  <b-modal id="editSection">
    <template #default>
      <slot name="default" />
    </template>
    <template #modal-footer>
      <div class="edit-profile-footer">
        <button class="primary-button" @click="$emit('click')">
          <h6>{{ 'تغییر' }}</h6>
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class EditSection extends Vue {
  show () {
    this.$bvModal.show('editSection')
  }
}
</script>

<style>
  .edit-profile-body {
  gap: 1rem;
}
.edit-profile-footer {
  display: flex;
  width: 100%;
  align-items: center;
}
</style>
