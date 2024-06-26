import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygonAmoy, avalancheFuji, baseSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia, polygonAmoy, avalancheFuji, baseSepolia],
  connectors: [
    injected(),
    // coinbaseWallet({ appName: 'Create Wagmi' }),
    // walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
    [polygonAmoy.id]: http(`https://polygon-amoy.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`),
    [avalancheFuji.id]: http('https://avalanche-fuji-c-chain-rpc.publicnode.com	'),
    [baseSepolia.id]: http('https://base-sepolia-rpc.publicnode.com'),
  },
  syncConnectedChain: true,
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
