import { http, createConfig } from 'wagmi'
import { mantleSepoliaTestnet, lineaSepolia, anvil } from 'wagmi/chains'
// import anvil from './my-anvil'

// 根据环境变量决定使用的链
const chains = process.env.NODE_ENV === 'development'
  ? [anvil, mantleSepoliaTestnet, lineaSepolia] as const
  : [mantleSepoliaTestnet, lineaSepolia] as const

// 配置 transport
const transports = Object.fromEntries(
  chains.map((chain) => [chain.id, http()])
) as Record<number, ReturnType<typeof http>>

export const config = createConfig({
  chains,
  transports,
})
