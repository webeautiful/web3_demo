<script setup lang="ts">
import { useAccount, useBalance, useClient } from '@wagmi/vue'
import { formatEther } from 'viem'
const { chainId, address } =  useAccount()
const client = useClient()

const tabIndex = ref(0)
function switchTab(index: number) {
  tabIndex.value = index
}

const result = ref()
function getChainID() {
  result.value = chainId.value
}
function getNetwork() {
  result.value = client.value?.chain
}
const balance = useBalance({ address: address.value })
const fetchBalance = async () => {
  const amount = formatEther(balance.data.value?.value || 0n)
  const symbol = balance.data.value?.symbol
  result.value = `${Format.maskString(address.value)}: ${amount} ${symbol}`
}
watchEffect(() => {
  if (tabIndex.value === 0) getChainID()
  if (tabIndex.value === 1) getNetwork()
  if (tabIndex.value === 2) fetchBalance()
})
</script>
<template>
  <UDivider class="mt-4 mb-2" label="State"/>
  <UButtonGroup>
    <UButton :color="tabIndex === 0 ? 'emerald' : 'primary'" label="ChainID" @click="switchTab(0)"/>
    <UButton :color="tabIndex === 1 ? 'emerald' : 'primary'" label="Network" @click="switchTab(1)"/>
    <UButton :color="tabIndex === 2 ? 'emerald' : 'primary'" label="Get Balance" @click="switchTab(2)"/>
  </UButtonGroup>
  <div>{{ result }}</div>
</template>