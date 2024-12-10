<script setup lang="ts">
import { useSignMessage } from '@wagmi/vue'

const { data, error, signMessage } = useSignMessage()
</script>
<template>
  <UDivider label="Signing" class="mt-4 mb-2"></UDivider>
  <UButton label="Sign Message" @click="signMessage({ message: 'hello world' })"/>
  <div v-if="data">✅{{ data }}</div>
  <div v-if="error">❌{{ error }}</div>
</template>