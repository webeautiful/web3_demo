import { WagmiPlugin, createConfig, http } from "@wagmi/vue"
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query"
import { injected, metaMask, safe } from "@wagmi/vue/connectors"
import type { Transport } from "viem"
import { bsc, bscTestnet, mainnet, sepolia } from 'viem/chains'

export const Network = [mainnet, sepolia, bsc, bscTestnet ] as const

export const config = createConfig({
  chains: Network,
  transports: Network.reduce((acc, chain) => {
    acc[chain.id] = http()
    return acc
  }, {} as Record<number, Transport>),
  connectors: [],
})
const queryClient = new QueryClient()
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WagmiPlugin, { config }).use(VueQueryPlugin,  { queryClient })
})
