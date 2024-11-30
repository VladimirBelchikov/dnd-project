import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useBagStore = defineStore('bag', () => {
  const bag = ref([
    { id: 1, name: 'Дрова', quantity: 2, weightInteger: 2, weightFractional: 0 },
    { id: 2, name: 'Мотыга', quantity: 4, weightInteger: 1, weightFractional: 3 },
    { id: 3, name: 'Кирпичи', quantity: 6, weightInteger: 16, weightFractional: 0 },
    { id: 4, name: 'Металлолом', quantity: 3, weightInteger: 3, weightFractional: 2 },
    { id: 5, name: 'Детали', quantity: 3, weightInteger: 6, weightFractional: 1 }
  ])

  const bagTotal = computed(() => {
    const frac = bag.value.reduce((item, nextItem) => {
      return item.weightInteger * 6 + item.weightFractional
    })

    return frac // @todo
  })

  const remove = (id) => {
    bag.value.splice(bag.value.findIndex((item) => item.id === id), 1)
  }

  const append = () => {
    bag.value.push({
      id: +new Date(),
      name: null,
      quantity: null,
      weight: null
    })
  }

  const cleanBag = () => {
    bag.value = []
  }

  return { bag, bagTotal, remove, append, cleanBag }
})
