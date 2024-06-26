import { useState } from 'react';
import './form.css';
import { simulateContract, writeContract, type SimulateContractErrorType } from '@wagmi/core'
import { abi } from './config/abi'
import { config } from './wagmi'
import { ethers } from 'ethers';

export const SendMessageAndUSDC = ({ contractAddress, destinationChainId, destinationContractAddress }) => {
    const [formData, setFormData] = useState({
        message: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { message, amount } = formData;

        // Handle the form submission logic here
        // console.log('Message:', message);
        // console.log('Amount in USDC:', amount);
        console.log(message,
            ethers.parseUnits(amount, "mwei").toString(),
            destinationChainId,
            destinationContractAddress)


        try {
            const { request } = await simulateContract(config, {
                abi,
                address: contractAddress,
                functionName: 'publishMessageWithUSDC',
                args: [
                    message,
                    ethers.parseUnits(amount, "mwei").toString(),
                    destinationChainId,
                    destinationContractAddress
                ],
            })

            const hash = await writeContract(config, request)

            console.log('Transaction Sent:', hash)
        }
        catch (e) {
            const error = e as SimulateContractErrorType
            console.log(error.name)
        }

    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label htmlFor="message">Message:</label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <br></br>
            <div>
                <label htmlFor="amount">Amount (in USDC):</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
            </div>
            <br></br>


            <button type="submit">Send</button>
        </form>
    );
};
