<script>
export default {
  name: 'DimiMenuItem',
  props: {
    to: {
      type: [String, Object],
      default: '',
      required: true
    }
  }
}
</script>

<template>
  <router-link
    :to="to"
    class="menu-item"
    exact-active-class="menu-item--active"
  >
    <slot />
  </router-link>
</template>

<style lang="scss">
@import '../scss/vars';
@import '../scss/mixins';

.menu-item {
  display: block;
  padding: 0.6em 0 0.6em 1.5em;
  border-radius: 0 4em 4em 0;
  color: $gray-light;
  font-size: 16px;
  font-weight: $font-weight-bold;
  text-decoration: none;

  &--active.menu-item {
    background-color: $red !important;
    color: $white;
  }
}
</style>
