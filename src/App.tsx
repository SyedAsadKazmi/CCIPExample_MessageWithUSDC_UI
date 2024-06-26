import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { ReadContract } from './read-contract'
import { Dropdown } from './destination-chain-dropdown'
import { SendMessageAndUSDC } from './sendMessageAndUSDC_Form'
import { contractAddressAtChain } from './config/contractAddressAtChain'
import { destinationChainsInfo } from './config/destinationChainsInfo'
import { useState } from 'react'
import { MessageSentEventListener } from './messageSentEventListener'
import { MessageReceivedEventListener } from './messageReceivedEventListener'
import { ReadDestinationContract } from './read-destination-contract'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [selectedDestinationChainId, setSelectedDestinationChainId] = useState('');
  const [selectedDestinationContractAddress, setSelectedDestinationContractAddress] = useState('');


  const handleChange = (event) => {
    const [chainId, contractAddress] = event.target.value.split(',');

    console.log(chainId, contractAddress)
    setSelectedDestinationChainId(chainId);
    setSelectedDestinationContractAddress(contractAddress);

  };

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          {/* addresses: {JSON.stringify(account.addresses)} */}
          address: {account.addresses?.[0]}
          <br />
          chainId: {account.chainId}
          <br />
          network: {account.chain?.name}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {/* {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))} */}

        <button
          key={connectors[0].uid}
          onClick={() => connect({ connector: connectors[0] })}
          type="button"
        >
          Connect
        </button>

        <br></br><br></br>

        {/* <div>{status}</div> */}

        <div>{error?.message}</div>

        {account.chainId ? <ReadContract chainId={account.chainId} blockExplorerUrl={account.chain?.blockExplorers.default.url} /> : <div></div>}
        <br></br><br></br>

        <Dropdown options={destinationChainsInfo} onChange={handleChange} />

        {account.chainId == 80002 ?

          <div>



            <br></br><br></br>

            <SendMessageAndUSDC contractAddress={contractAddressAtChain[account.chainId]} destinationChainId={selectedDestinationChainId} destinationContractAddress={selectedDestinationContractAddress} />
            <MessageSentEventListener contractAddress={contractAddressAtChain[account.chainId]} />
          </div>

          :
          <div>
            {account.chainId == parseInt(selectedDestinationChainId) ? <MessageReceivedEventListener contractAddress={contractAddressAtChain[parseInt(selectedDestinationChainId)]} /> : <div></div>}
            {account.chainId == parseInt(selectedDestinationChainId) ? <ReadDestinationContract chainId={parseInt(selectedDestinationChainId)} /> :
              <div>
                <h2>Latest Message Details</h2>
                <div>Latest Received Message: No message has been received on this chain yet.</div>
                <div>Latest Received Amount: No amount has been received on this chain yet.</div>
              </div>
            }

          </div>
        }



      </div>
    </>
  )
}

export default App
