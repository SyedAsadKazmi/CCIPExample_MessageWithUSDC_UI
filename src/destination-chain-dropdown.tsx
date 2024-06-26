export const Dropdown = ({ options, onChange }) => {
    const selectStyle = {
        width: '200px',
        height: '40px',
        fontSize: '16px',
    };
    return (
        <select onChange={onChange} style={selectStyle}>
            <option value="">Select Destination Chain</option>
            {options.map((chainInfo) => (
                <option key={chainInfo.chainId} value={`${chainInfo.chainId},${chainInfo.contractAddress}`}>
                    {chainInfo.networkName}
                </option>
            ))}
        </select>
    );
};