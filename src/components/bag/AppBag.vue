<script setup lang="ts">
import { onUpdated, useTemplateRef } from 'vue'
import { useSortable } from '@vueuse/integrations/useSortable'
import { useBagStore } from '@/stores/bag'

import BagItem from '@/components/bag/BagItem.vue'
import BagHeader from '@/components/bag/BagHeader.vue'


const bagStore = useBagStore()

const sortableItem = useTemplateRef('sortableItem')
const sortable = useSortable(sortableItem, bagStore.bag, {
  handle: '.bag-item__handler'
})

onUpdated(() => {
  if (bagStore.bag.length === 0) {
    sortable.stop()
  } else {
    sortable.start()
  }
})

</script>

<template>
  <div v-if="bagStore.bag.length === 0" class="empty-bag">You have no items in bag</div>
  <div v-else class="bag">
<!--    <BagHeader />-->
    <div class="bag__items" ref="sortableItem">
      <BagItem
        v-for="item in bagStore.bag"
        v-model:name="item.name"
        v-model:weightInteger="item.weightInteger"
        v-model:weightFractional="item.weightFractional"
        v-model:quantity="item.quantity"
        :key="item.id"
        @remove="bagStore.remove(item.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty-bag {
  display: flex;
  justify-content: center;
  font-size: 32px;
}

.bag {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
