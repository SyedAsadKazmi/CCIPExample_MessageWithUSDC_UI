import { useWatchContractEvent } from 'wagmi'
import { abi } from './config/abi'
import { useState } from 'react'
import { ethers } from 'ethers'
export function MessageReceivedEventListener({ contractAddress }) {
    console.log('MessageReceivedEventListener:', contractAddress)
    useWatchContractEvent({
        address: contractAddress,
        abi,
        eventName: 'MessageReceived',
        onLogs(logs) {
            console.log(logs[0].args.receivedMessage.toString(), logs[0].args.receivedAmount.toString())
            alert(`Message Received: ${logs[0].args.receivedMessage.toString()}\n\nAmount Received: ${ethers.formatUnits(logs[0].args.receivedAmount, 'mwei')} USDC`)
        }
    })

    return (
        <div></div>
    )

}