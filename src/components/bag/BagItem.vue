<script setup>
import { computed } from 'vue'

const name = defineModel('name')
const weightInteger = defineModel('weightInteger')
const weightFractional = defineModel('weightFractional')
const quantity = defineModel('quantity')

const subtotal = computed(() => {
  const totalFractional = (weightInteger.value * 6 + +weightFractional.value) * quantity.value
  const sumInt = Math.floor(totalFractional / 6)
  const fractional = totalFractional % 6
  return fractional !== 0 ? `${ sumInt } ${ fractional }/6` : `${ sumInt }`
})

defineEmits([ 'remove' ])
</script>

<template>
  <div class="bag-item">
    <slot />
    <input class="bag-item__input" type="text" name="name" placeholder="item" v-model="name">
    <input class="bag-item__input" type="number" name="quantity" placeholder="quantity" v-model="quantity">
    <input class="bag-item__input text-align-right" type="number" name="weight" placeholder="weightInteger"
           v-model="weightInteger">
    <select class="bat-item__select" name="weightFractional" v-model="weightFractional">
      <option value="0">0</option>
      <option value="1">1/6</option>
      <option value="2">2/6</option>
      <option value="3">3/6</option>
      <option value="4">4/6</option>
      <option value="5">5/6</option>
    </select>
    <input
      class="bag-item__input"
      type="text"
      name="subtotal"
      placeholder="subtotal"
      :value="subtotal"
      readonly
    >
    <button class="bag-item__remove-button" @click="$emit('remove')">X</button>
  </div>
</template>

<style scoped lang="scss">
.bag-item {
  display: grid;
  grid-template-columns: 30px 1fr 20% 45px 45px 20% 30px;
  gap: 10px;

  &__input {
    padding: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
  }

  &__select {
    font-size: 16px;
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
