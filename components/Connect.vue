<script setup lang="ts">
import { useConnect, useChainId } from '@wagmi/vue';

const chainId = useChainId();
const { connectors, connect, error } = useConnect();
</script>

<template>
  <UButton
    v-for="connector in connectors"
    :label="connector.name"
    @click="connect({ connector, chainId })"
  >
    <template #leading>
      <UAvatar
        :src="connector.icon ?? 'https://avatars.githubusercontent.com/u/3364316?v=4'"
        size="2xs"
      />
    </template>
  </UButton>
  <div v-if="error">❌{{ error }}</div>
</template>