<script setup>
import { useBagStore } from '@/stores/bag.js'

const bagStore = useBagStore()
</script>

<template>
  <footer class="footer">
    <button @click="bagStore.append">Append item</button>
    <button @click="bagStore.cleanBag">Clean bag</button>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 50px;
  padding: 10px;

  &:before {
    content: '';
    position: absolute;
    left: -50vw;
    right: -50vw;
    top: 0;
    bottom: 0;
    background-color: teal;
    z-index: -1;
  }

  & > button {
    width: 100%;
    border: none;
    border-radius: 5px;
  }
}
</style>
