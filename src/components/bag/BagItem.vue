<script setup>
import { computed } from 'vue'

const name = defineModel('name')
const weight = defineModel('weight')
const quantity = defineModel('quantity')

const subtotal = computed(() => weight.value * quantity.value)

defineEmits(['remove'])
</script>

<template>
  <div class="bag-item">
    <slot/>
    <input class="bag-item__input" type="text" name="name" placeholder="item" v-model="name">
    <input class="bag-item__input" type="text" name="quantity" placeholder="quantity" v-model="quantity">
    <input class="bag-item__input" type="text" name="weight" placeholder="weight" v-model="weight">
    <input class="bag-item__input" type="text" name="subtotal" placeholder="quantity" :value="subtotal" readonly>
    <button class="bag-item__remove-button" @click="$emit('remove')">X</button>
  </div>
</template>

<style scoped lang="scss">
.bag-item {
  display: grid;
  grid-template-columns: 30px 1fr 20% 20% 20% 30px;
  gap: 10px;

  &__input {
    padding: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  &__remove-button {
    padding: 0;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: teal;
    outline: none;
    cursor: pointer;
  }
}
</style>
