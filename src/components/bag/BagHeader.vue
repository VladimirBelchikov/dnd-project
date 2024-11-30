<script setup>

</script>

<template>
  <div class="bag-header">
    <div/>
    <div class="bag-header__name">Item</div>
    <div class="bag-header__name">Quantity</div>
    <div class="bag-header__name">Weight</div>
    <div class="bag-header__name">Subtotal</div>
    <div/>
  </div>
</template>

<style scoped lang="scss">
.bag-header {
  display: grid;
  grid-template-columns: 30px 1fr 20% 20% 20% 30px;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
}
</style>
