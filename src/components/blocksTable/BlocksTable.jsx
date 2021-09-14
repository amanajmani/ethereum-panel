import React from "react";
import PropTypes from "prop-types";

/* UTILS */
import formatBigNumber from "../../utils/formatBigNumber.utils";

/* STYLES */
import "./blocksTable.css";

const BlocksTable = ({
  blockNumber,
  blockHash,
  gasLimit,
  timeStamp,
  transactions,
  setTransactionsTableData,
}) => {
  const handleTransactionsTableData = () => {
    setTransactionsTableData(transactions);
  };

  return (
    <tr>
      <td
        className="block_number"
        onClick={handleTransactionsTableData}
        role="presentation"
      >
        {blockNumber}
      </td>
      <td>{blockHash}</td>
      <td>{formatBigNumber(gasLimit)}</td>
      <td>{timeStamp}</td>
    </tr>
  );
};

export default BlocksTable;

BlocksTable.propTypes = {
  blockNumber: PropTypes.number.isRequired,
  blockHash: PropTypes.string.isRequired,
  gasLimit: PropTypes.instanceOf(Object).isRequired,
  timeStamp: PropTypes.number.isRequired,
  transactions: PropTypes.instanceOf(Array).isRequired,
  setTransactionsTableData: PropTypes.func.isRequired,
};
