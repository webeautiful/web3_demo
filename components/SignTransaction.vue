<script setup lang="ts">
import { useAccount, useSendTransaction } from '@wagmi/vue'
import { encodeFunctionData, erc20Abi, parseEther, parseUnits, prepareEncodeFunctionData } from 'viem'
const { address } = useAccount()
const { data, error, sendTransaction } = useSendTransaction()
const sendETH = () => {
  sendTransaction({
    account: address.value,
    to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
    value: parseEther('0.01')
  })
}
const sendToken = () => {
  const contractAddress = '0x55d398326f99059fF775485246999027B3197955'
  const transfer = prepareEncodeFunctionData({
    abi: erc20Abi,
    functionName: 'transfer',
  })
  const toAddress = '0xd2135CfB216b74109775236E36d4b433F1DF507B'
  const amount = parseUnits('5', 18)
  const args: [`0x${string}`, bigint] = [toAddress, amount]
  const encodedData = encodeFunctionData({
      ...transfer,
      args
    })
  sendTransaction({
    account: address.value,
    to: contractAddress,
    value: 0n,
    data: encodedData
  })
}
const sendTokenApprove = () => {
  const contractAddress = '0x55d398326f99059fF775485246999027B3197955'
  const transfer = prepareEncodeFunctionData({
    abi: erc20Abi,
    functionName: 'approve',
  })
  const toAddress = '0xd2135CfB216b74109775236E36d4b433F1DF507B'
  const amount = parseUnits('6', 18)
  const args: [`0x${string}`, bigint] = [toAddress, amount]
  const encodedData = encodeFunctionData({
      ...transfer,
      args
    })
  sendTransaction({
    account: address.value,
    to: contractAddress,
    value: 0n,
    data: encodedData
  })
}
const sendTokenContractInteraction = () => {
  const contractAddress = '0x55d398326f99059fF775485246999027B3197955'
  const transfer = prepareEncodeFunctionData({
    abi: erc20Abi,
    functionName: 'balanceOf',
  })
  const toAddress = '0xd2135CfB216b74109775236E36d4b433F1DF507B'
  const args: [`0x${string}`] = [toAddress]
  const encodedData = encodeFunctionData({
      ...transfer,
      args
    })
  sendTransaction({
    account: address.value,
    to: contractAddress,
    value: parseEther('0.001'),
    data: encodedData
  })
}
</script>
<template>
  <UDivider label="Sign Transaction" class="mt-4 mb-2"></UDivider>
  <UButtonGroup>
    <UButton label="Send ETH" @click="sendETH"/>
    <UButton label="Send ERC20 Tokens" @click="sendToken"/>
  </UButtonGroup>

  <UButtonGroup class="mt-4">
    <UButton label="Send Token Approve" @click="sendTokenApprove"/>
    <UButton label="Send Contract Interaction" @click="sendTokenContractInteraction"/>
  </UButtonGroup>
  <div v-if="data">✅{{ data }}</div>
  <div v-if="error">❌{{ error }}</div>
</template>