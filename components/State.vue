<script setup lang="ts">
import { useAccount, useBalance, useClient } from '@wagmi/vue'
import { formatEther } from 'viem'
const { chainId, address } =  useAccount()
const client = useClient()
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
</script>
<template>
  <UDivider class="mt-4 mb-2" label="State"/>
  <UButtonGroup>
    <UButton label="ChainID" @click="getChainID"/>
    <UButton label="Network" @click="getNetwork"/>
    <UButton label="Get Balance" @click="fetchBalance"/>
  </UButtonGroup>
  <div>{{ result }}</div>
</template>