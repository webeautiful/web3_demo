<script setup lang="ts">
import { useConnect, useChainId } from '@wagmi/vue';

const chainId = useChainId();
const { connectors, connect } = useConnect();
console.log(chainId, connectors)
</script>

<template>
  <UButton
    v-for="connector in connectors"
    :label="connector.name"
    @click="connect({ connector, chainId })"
  >
    <template #leading>
      <UAvatar
        :src="connector.icon ?? 'https://avatars.githubusercontent.com/u/739984?v=4'"
        size="2xs"
      />
    </template>
  </UButton>
</template>