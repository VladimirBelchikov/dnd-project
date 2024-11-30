<script setup>
import { useBagStore } from '@/stores/bag.js'

const bagStore = useBagStore()
</script>

<template>
  <header class="header">
    <div>{{ bagStore.bagTotal }}</div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  height: 50px;

  &:before {
    content: '';
    position: absolute;
    left: -50vw;
    right: -50vw;
    top: 0;
    bottom: 0;
    background-color: teal;
  }
}
</style>
