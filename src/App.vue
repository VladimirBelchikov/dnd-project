<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppBag from '@/components/bag/AppBag.vue'
</script>

<template>
  <div class="app-wrapper">
    <AppHeader class="header" />
    <main class="main">
      <AppBag />
    </main>
    <AppFooter class="footer" />
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  gap: 20px;
  height: 100vh;
}

.header {

}

.main {
  overflow-y: auto;
}

.footer {
}
</style>
