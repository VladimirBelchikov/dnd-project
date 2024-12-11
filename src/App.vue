<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppBag from '@/components/bag/AppBag.vue'
import { useBagStore } from '@/stores/bag.ts'

const bagStore = useBagStore()
</script>

<template>
  <div class="app-wrapper">
    <AppHeader class="header" />
    <main class="main">
      <AppBag />
    </main>
    <button
      @click="bagStore.append"
      class="append-item"
    >
      +
    </button>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 60px;
  gap: 20px;
}

.main {
  overflow-y: auto;
  overflow-x: hidden;
}

.append-item {
  position: fixed;
  right: 30px;
  bottom: 50px;
  width: 70px;
  height: 70px;
  margin: 0;
  padding: 0;
  font-size: 50px;
  line-height: 1;
  color: var(--default-text-color);
  border: none;
  border-radius: 50%;
  background-color: var(--color-blue);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}
</style>
