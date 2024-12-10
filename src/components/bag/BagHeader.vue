<script setup>

</script>

<template>
  <div class="bag-header">
    <div class="bag-header__name"/>
    <div class="bag-header__name">Item</div>
    <div class="bag-header__name">Quantity</div>
    <div class="bag-header__name text-align-center">Weight</div>
    <div class="bag-header__name">Subtotal</div>
    <div class="bag-header__name text-align-center">X</div>
  </div>
</template>

<style scoped lang="scss">
.bag-header {
  display: grid;
  grid-template-columns:
    30px 2fr minmax(30px, 1fr) 95px minmax(60px, 1fr) 30px;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 576px) {
    gap: 7px;
    font-size: 16px;
  }

  &__name {
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
