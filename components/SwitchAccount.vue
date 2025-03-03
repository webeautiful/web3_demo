<script setup lang="ts">
import { useSwitchAccount } from '@wagmi/vue'

const { connectors, switchAccount } = useSwitchAccount()
</script>

<template>
  <div>
    <UDivider label="Switch Account" class="mt-4 mb-2"></UDivider>
    <UButton
      v-for="connector in connectors"
      :key="connector.id"
      @click="switchAccount({ connector })"
    >
      {{ connector.name }}
    </UButton>
  </div>
</template>