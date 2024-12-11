<script setup lang="ts">
import { useAccount, useDisconnect } from '@wagmi/vue';

const { address, connector } = useAccount();
const { disconnect } = useDisconnect();
</script>

<template>
  <UDivider label="Account" class="mb-2"></UDivider>
  <div>Address: <br/> {{ address }}</div>
  <div>Connected to {{ connector?.name }} Connector.</div>
  <UButton @click="disconnect()">Disconnect</UButton>
</template>