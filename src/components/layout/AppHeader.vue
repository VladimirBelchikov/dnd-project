<script setup>
import { useBagStore } from '@/stores/bag.ts'
import { storeToRefs } from 'pinia'

const { bagTotal } = storeToRefs(useBagStore())
</script>

<template>
  <header class="header">
    <div
      class="header__total"
    >
      Total weight: {{ bagTotal || 0 }}
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: -50vw;
    right: -50vw;
    top: 0;
    bottom: 0;
    background-color: teal;
  }

  &__total {
    position: relative;
    font-size: 20px;
    color: #FFFFFF;
    z-index: 1;
  }
}
</style>
