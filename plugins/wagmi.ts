import { WagmiPlugin, createConfig, http } from "@wagmi/vue"
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query"
import { injected, metaMask, safe, walletConnect } from "@wagmi/vue/connectors"
import type { Transport } from "viem"
import { bsc, bscTestnet, mainnet, sepolia, polygon } from 'viem/chains'

export const Network = [bsc, bscTestnet,  mainnet, sepolia, polygon ] as const
// export const Network = [bsc] as const

export const config = createConfig({
  chains: Network,
  transports: Network.reduce((acc, chain) => {
    acc[chain.id] = http()
    return acc
  }, {} as Record<number, Transport>),
  connectors: [
    injected(),
    // walletConnect({
    //   projectId: '56aacb244edc63d7ce0d9cc0932f7c7c'
    // }),
],
})
const queryClient = new QueryClient()
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WagmiPlugin, { config }).use(VueQueryPlugin,  { queryClient })
})
