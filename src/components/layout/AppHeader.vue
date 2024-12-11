<script setup>
import { useBagStore } from '@/stores/bag.ts'
import { storeToRefs } from 'pinia'
import IconSettings from '@/components/icons/IconSettings.vue'
import AppInput from '@/components/UI/AppInput.vue'

const { bagTotal } = storeToRefs(useBagStore())
</script>

<template>
  <header class="header">
    <div class="header__bags">

    </div>
    <div class="header__divider" />
    <div class="header__summary">
      <div class="header__bag-control">
        <button>
          <IconSettings />
        </button>
      </div>
      <div class="header__bag-title">
        <AppInput
          type="text"
          name="current-bag-title"
          placeholder="Inventory name"
        />
      </div>
      <div class="header__inventory-total">
        <img src="/images/icons/weight.png" alt="">
        <span>{{ bagTotal || 0 }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: -50vw;
    right: -50vw;
    top: 0;
    bottom: 0;
    background-color: var(--color-semi-brown);
    z-index: -1;
  }

  &__summary {
    display: grid;
    grid-template-columns: 70px 1fr 80px;
    gap: 5px;
    width: 100%;
  }

  &__bag-control {
    & > button {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: var(--default-border-radius);
      appearance: none;
      cursor: pointer;

      & > svg {
        width: 20px;
        height: 20px;
      }
    }

  }

  &__bag-title {
    & > input {
      width: 100%;
      height: 100%;
      border-radius: var(--default-border-radius);
      font-size: inherit;
    }
  }

  &__inventory-total {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 6px;
    font-size: 12px;
    border-radius: var(--default-border-radius);
    background-color: var(--color-blue);

    & > img {
      width: 18px;
    }
  }

}
</style>
