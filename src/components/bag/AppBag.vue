<script setup>
import { nextTick, onBeforeUpdate, onUpdated, ref } from 'vue'
import { useSortable } from '@vueuse/integrations/useSortable'
import { useBagStore } from '@/stores/bag.js'

import BagItem from '@/components/bag/BagItem.vue'
import BagHeader from '@/components/bag/BagHeader.vue'
import IconDraggable from '@/components/icons/IconDraggable.vue'


const bagStore = useBagStore()

const sortableItem = ref('sortableItem')
const sortable = useSortable(sortableItem, bagStore.bag, {
  handle: '.handle'
})

onUpdated(() => {
  if(bagStore.bag.length === 0) {
    sortable.stop()
  } else {
    sortable.start()
  }
})

</script>

<template>
  <div v-if="bagStore.bag.length === 0" class="empty-bag">You have no items in bag</div>
  <div v-else class="bag">
    <BagHeader />
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
//.handle {
//  background-color: white;
//  border-radius: 5px;
//  cursor: grab;
//
//  &__icon {
//    width: 100%;
//    height: 100%;
//  }
//}

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

  &__empty {
    display: flex;
    justify-content: center;
    font-size: 32px;
  }
}
</style>
