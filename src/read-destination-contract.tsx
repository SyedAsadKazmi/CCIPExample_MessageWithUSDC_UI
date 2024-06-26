import { useReadContract } from 'wagmi'
import { abi } from './config/abi'
import { contractAddressAtChain } from './config/contractAddressAtChain'
import { ethers } from 'ethers';
interface ReadDestinationContractProps {
    chainId: number;
}

export const ReadDestinationContract: React.FC<ReadDestinationContractProps> = ({ chainId }) => {

    // console.log(contractAddressAtChain[chainId])
    const { data: latestReceivedMessage } = useReadContract({
        abi,
        address: contractAddressAtChain[chainId],
        functionName: 'getLastReceivedMessage',

    })

    const { data: latestReceivedUSDC } = useReadContract({
        abi,
        address: contractAddressAtChain[chainId],
        functionName: 'getLastReceivedUSDC',

    })


    const receivedMessage = latestReceivedMessage ? latestReceivedMessage.toString() : "No message received"
    const receivedAmount = latestReceivedUSDC ? ethers.formatUnits(latestReceivedUSDC, "mwei") : "0"

    return (
        <div>
            <h2>Latest Message Details</h2>
            <div>Latest Received Message: {receivedMessage}</div>
            <div>Latest Received Amount: {receivedAmount} USDC</div>
        </div>

    )
}