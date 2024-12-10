<script setup lang="ts">
import { useSwitchChain } from '@wagmi/vue'

const { chains, switchChain, data, error } = useSwitchChain()
</script>
<template>
  <UDivider label="Switch Network" class="mt-4 mb-2"></UDivider>
  <UButton v-for="chain in chains" :key="chain.id" @click="switchChain({ chainId: chain.id })" :label="chain.name" class="mr-2 mb-2"/>
  <div v-if="data">✅{{ data }}</div>
  <div v-if="error">❌{{ error }}</div>
</template>