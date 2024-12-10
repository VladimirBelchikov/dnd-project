<script setup lang="ts">
import { computed, defineModel } from 'vue'
import IconDraggable from '@/components/icons/IconDraggable.vue'
import useTotal from '@/composables/useTotal'

const name = defineModel('name', { default: '' })
const weightInteger = defineModel('weightInteger', { default: 0 })
const weightFractional = defineModel('weightFractional', { required: true, default: 0 })
const quantity = defineModel('quantity', { required: true, default: 0 })


const totalFractional = computed(() =>
  weightInteger.value === null
    ? weightFractional.value * quantity.value
    : (weightInteger.value * 6 + weightFractional.value) * quantity.value
)
const subtotal = useTotal(totalFractional)

defineEmits(['remove'])
</script>

<template>
  <div class="bag-item">
    <div class="bag-item__handler">
      <IconDraggable class="bag-item__handler-icon" />
    </div>
    <input
      class="bag-item__input"
      type="text"
      name="name"
      placeholder="item"
      v-model="name"
    >
    <input
      class="bag-item__input text-align-right"
      type="number"
      name="quantity"
      placeholder="quantity"
      v-model="quantity"
    >
    <input
      class="bag-item__input text-align-right"
      type="number"
      name="weight"
      placeholder="weightInteger"
      v-model="weightInteger">
    <select
      class="bag-item__select text-align-right"
      name="weightFractional"
      v-model.number="weightFractional"
    >
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
  grid-template-columns:
    30px 2fr minmax(30px, 1fr) 45px 45px minmax(60px, 1fr) 30px;
  gap: 10px;
  font-size: 16px;

  @media screen and (max-width: 576px) {
    gap: 7px;
    font-size: 14px;
  }

  &__handler {
    background-color: white;
    border-radius: var(--default-border-radius);
    cursor: grab;
  }

  &__handler-icon {
    width: 100%;
    height: 100%;
  }

  &__input {
    width: 100%;
    padding: 5px;
    font-size: inherit;
    border: none;
    border-radius: var(--default-border-radius);
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    text-overflow: ellipsis;
  }

  &__select {
    padding: 5px;
    font-size: inherit;
    border-radius: var(--default-border-radius);
    color: var(--default-text-color);
    background-color: #FFFFFF;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  &__remove-button {
    padding: 0;
    border: none;
    border-radius: var(--default-border-radius);
    color: white;
    background-color: teal;
    outline: none;
    cursor: pointer;
  }
}
</style>
