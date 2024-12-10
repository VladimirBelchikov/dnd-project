<script setup lang="ts">
import { computed, defineModel } from 'vue'
import IconDraggable from '@/components/icons/IconDraggable.vue'
import useTotal from '@/composables/useTotal'
import { VueToggles } from 'vue-toggles'

const name = defineModel('name', { default: '' })
const weightInteger = defineModel('weightInteger', { default: 0 })
const weightFractional = defineModel('weightFractional', { required: true, default: 0 })
const quantity = defineModel('quantity', { required: true, default: 0 })
const isAllow = defineModel('isAllow', { required: true, default: true })


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
    <div class="bag-item__handler sortable">
      <IconDraggable class="bag-item__handler-icon" />
    </div>
    <div class="field name">
      <input
        class="bag-item__input"
        type="text"
        name="name"
        placeholder="Item"
        v-model="name"
      >
    </div>
    <div class="field is-allow">
      <VueToggles
        class="bag-item__check"
        :width="50"
        :value="isAllow"
        v-model="isAllow"
      />
    </div>
    <div class="field quantity">
      <input
        class="bag-item__input"
        type="number"
        name="quantity"
        placeholder="Quantity"
        v-model="quantity"
      >
    </div>
    <div class="field w-integer">
      <input
        class="bag-item__input"
        type="number"
        name="weight"
        placeholder="Encumbrance"
        v-model="weightInteger"
      >
    </div>
    <div class="field w-fractional">
      <select
        class="bag-item__select"
        name="weightFractional"
        v-model.number="weightFractional"
      >
        <option value="0">-/-</option>
        <option value="1">1/6</option>
        <option value="2">2/6</option>
        <option value="3">3/6</option>
        <option value="4">4/6</option>
        <option value="5">5/6</option>
      </select>
    </div>
    <div class="field subtotal">
      <input
        class="bag-item__input "
        type="text"
        name="subtotal"
        placeholder="Subtotal"
        :value="subtotal"
        readonly
      >
    </div>
    <button class="bag-item__remove-button remove" @click="$emit('remove')">X</button>
  </div>
</template>


<style scoped lang="scss">
.bag-item {
  display: grid;
  grid-template-columns:
    30px 2fr minmax(30px, 1fr) 45px 45px minmax(60px, 80px) 50px 30px;
  grid-template-areas:
      'sortable name quantity w-integer w-fractional subtotal is-allow remove';
  gap: 10px;
  padding: 3px;
  border: 1px solid gray;
  border-radius: var(--default-border-radius);
  font-size: 16px;


  @media screen and (max-width: 576px) {
    grid-template-columns: 30px 50px minmax(30px, 1fr) minmax(30px, 1fr) 35px minmax(60px, 80px) 30px;
    grid-template-areas:
      'sortable name name name name name remove'
      'sortable is-allow quantity w-integer w-fractional subtotal remove';
    gap: 7px;
    font-size: 14px;
  }

  &__handler {
    max-height: 30px;
    background-color: white;
    border-radius: var(--default-border-radius);
    cursor: grab;

    @media screen and (max-width: 576px) {
      max-height: none;
    }
  }

  &__handler-icon {
    width: 100%;
    height: 100%;
  }

  &__check {
    width: 30px;
    height: 100% !important;
  }

  &__input {
    height: 100%;
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
    width: 100%;
    height: 100%;
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
    height: 100%;
  }
}

.sortable {
  grid-area: sortable;
}

.name {
  grid-area: name;
}

.is-allow {
  grid-area: is-allow;
}

.quantity {
  grid-area: quantity;
}

.w-integer {
  grid-area: w-integer;
}

.w-fractional {
  grid-area: w-fractional;
}

.subtotal {
  grid-area: subtotal;
}

.remove {
  grid-area: remove;
}
</style>
