import { useWatchContractEvent } from 'wagmi'
import { abi } from './config/abi'
import { useState } from 'react'

export function MessageSentEventListener({ contractAddress }) {
    const [messageId, setMessageId] = useState('');
    useWatchContractEvent({
        address: contractAddress,
        abi,
        eventName: 'MessageSent',
        onLogs(logs) {
            alert('CCIP Message Sent')
            console.log('CCIP Message Id:', logs[0].args.messageId.toString())
            setMessageId(logs[0].args.messageId.toString())
        }
    })

    return (
        messageId ?
            <div>CCIP Message Sent: <a href={`https://ccip.chain.link/msg/${messageId}`}>{`https://ccip.chain.link/msg/${messageId}`}</a></div> :
            <div></div>)

}