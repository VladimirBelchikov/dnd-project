import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useBagStore = defineStore('bag', () => {
  const bag = ref([
    { id: 1, name: 'Дрова', quantity: 2, weight: '2' },
    { id: 2, name: 'Мотыга', quantity: 4, weight: '1' },
    { id: 3, name: 'Кирпичи', quantity: 6, weight: '16' },
    { id: 4, name: 'Металлолом', quantity: 3, weight: '3' },
    { id: 5, name: 'Детали', quantity: 3, weight: '6' }
  ])

  const bagTotal = computed(() => {

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
