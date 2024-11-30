<script setup>

</script>

<template>
  <header class="header"></header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
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
