import { computed, Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import useTotal from '@/composables/useTotal'

interface IBag {
  id: number
  name: string
  quantity: number
  weightInteger: number
  weightFractional: number
  isAllow: boolean
}

export const useBagStore = defineStore('bag', () => {
  const bag: Ref<IBag[]> = ref<IBag[]>([
    // { id: 1, name: 'Дрова', quantity: 2, weightInteger: 2, weightFractional: 0, isAllow: true },
    // { id: 2, name: 'Мотыга', quantity: 4, weightInteger: 1, weightFractional: 3, isAllow: true },
    // { id: 3, name: 'Кирпичи', quantity: 6, weightInteger: 16, weightFractional: 0, isAllow: true },
    // { id: 4, name: 'Металлолом', quantity: 3, weightInteger: 3, weightFractional: 2, isAllow: true },
    // { id: 5, name: 'Детали', quantity: 3, weightInteger: 6, weightFractional: 1, isAllow: true }
  ])

  const totalFractional = computed<number>(
    () => bag.value.reduce(
      (currentSum, item) => {
        if (item.isAllow) {
          return currentSum + (item.weightInteger === null
            ? +item.weightFractional * item.quantity
            : (item.weightInteger * 6 + +item.weightFractional) * item.quantity)
        } else {
          return currentSum
        }
      }, 0
    )
  )

  const bagTotal = useTotal(totalFractional)

  const remove = (id: number) => {
    if (confirm('Are you sure you want to remove item from bag?'))
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
      weightFractional: 0,
      isAllow: true
    })
  }

  const cleanBag = () => {
    if (confirm('Are you sure you want to clean your bag?')) bag.value.splice(0)
  }

  return { bag, bagTotal, remove, append, cleanBag }
}, {
  persist: true
})
