import RPC_URL from "../constants/rpcUrl.constants";

const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export default provider;
