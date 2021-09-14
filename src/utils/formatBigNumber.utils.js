const ethers = require("ethers");

const formatBigNumber = (value) => ethers.utils.formatEther(value);

export default formatBigNumber;
