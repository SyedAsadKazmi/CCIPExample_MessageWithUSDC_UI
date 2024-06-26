import { useReadContract } from 'wagmi'
import { abi } from './config/abi'
import { contractAddressAtChain } from './config/contractAddressAtChain'
import { ethers } from 'ethers';
interface ReadContractProps {
    chainId: number;
    blockExplorerUrl: string | undefined;
}

export const ReadContract: React.FC<ReadContractProps> = ({ chainId, blockExplorerUrl }) => {

    // console.log(contractAddressAtChain[chainId])
    const { data: balanceUSDC } = useReadContract({
        abi,
        address: contractAddressAtChain[chainId],
        functionName: 'getBalanceOfUSDC',

        // args: [],

    })

    const { data: balanceLINK } = useReadContract({
        abi,
        address: contractAddressAtChain[chainId],
        functionName: 'getBalanceOfLINK',

        // args: [],

    })


    const usdcBalance = balanceUSDC ? ethers.formatUnits(balanceUSDC, "mwei") : "0"
    const linkBalance = balanceLINK ? ethers.formatUnits(balanceLINK, "ether") : "0"
    const blockExplorerUrlString = blockExplorerUrl ? `${blockExplorerUrl}/address/${contractAddressAtChain[chainId]}` : contractAddressAtChain[chainId];

    return (
        <div>
            <h2>Contract Details</h2>
            <div>Contract Address: <a href={blockExplorerUrlString} target='blank'>{contractAddressAtChain[chainId]}</a></div>
            <div>USDC Balance: {usdcBalance}</div>
            <div>LINK Balance: {linkBalance}</div>
        </div>

    )
}