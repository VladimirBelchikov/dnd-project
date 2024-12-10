import { computed, ComputedRef } from 'vue'

export default function useTotal(totalFractional: ComputedRef) {

  const totalSumInt =
    computed(() => Math.floor(totalFractional.value / 6))
  const fractional =
    computed(() => totalFractional.value % 6)
  const sumIntFormatted =
    computed(() => totalSumInt.value !== 0 ? `${totalSumInt.value} ` : '')
  const fractionalFormatted =
    computed(() => fractional.value !== 0 ? `${fractional.value}/6` : '')
  const bagTotal =
    computed(() => `${sumIntFormatted.value}${fractionalFormatted.value}`)


  return bagTotal
}
