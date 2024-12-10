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
  const bag: Ref<IBag[]> = ref<IBag[]>([])

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
