import { computed, Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import useTotal from '@/composables/useTotal'

interface IBag {
  id: number
  name: string
  quantity: number
  weightInteger: number
  weightFractional: number
}

export const useBagStore = defineStore('bag', () => {
  const bag: Ref<IBag[]> = ref<IBag[]>([
    { id: 1, name: 'Дрова', quantity: 2, weightInteger: 2, weightFractional: 0 },
    { id: 2, name: 'Мотыга', quantity: 4, weightInteger: 1, weightFractional: 3 },
    { id: 3, name: 'Кирпичи', quantity: 6, weightInteger: 16, weightFractional: 0 },
    { id: 4, name: 'Металлолом', quantity: 3, weightInteger: 3, weightFractional: 2 },
    { id: 5, name: 'Детали', quantity: 3, weightInteger: 6, weightFractional: 1 }
  ])

  const totalFractional = computed<number>(
    () => bag.value.reduce(
      (currentSum, item) =>
        currentSum + (item.weightInteger === null
          ? +item.weightFractional * item.quantity
          : (item.weightInteger * 6 + +item.weightFractional) * item.quantity),
      0
    )
  )

  const bagTotal = useTotal(totalFractional)

  const remove = (id: number) => {
    bag.value.splice(
      bag.value.findIndex((item) => item.id === id),
      1
    )
  }

  const append = () => {
    bag.value.push({
      id: +new Date(),
      name: null,
      quantity: null,
      weightInteger: null,
      weightFractional: 0
    })
  }

  const cleanBag = () => {
    bag.value.splice(0)
  }

  return { bag, bagTotal, remove, append, cleanBag }
}, {
  persist: true
})
