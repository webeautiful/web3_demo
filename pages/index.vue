<script setup lang="ts">
import { useAccount } from '@wagmi/vue';

const { isConnected } = useAccount();
</script>

<template>
  <Connected v-if="isConnected" />
  <Connect v-else />
</template>