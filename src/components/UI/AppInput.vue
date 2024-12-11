<script setup lang="ts">

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, required: true },
  placeholder: { type: String },
})

const model = defineModel()

</script>

<template>
  <input
    class="input"
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
    v-model="model"
  >
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: inherit;
  border: none;
  border-radius: var(--default-border-radius);
  color: inherit;
  background-color: #FFFFFF;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  text-overflow: ellipsis;
}
</style>
