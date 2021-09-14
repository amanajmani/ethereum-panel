import React from "react";
import PropTypes from "prop-types";

/* UTILS */
import formatBigNumber from "../../utils/formatBigNumber.utils";

/* STYLES */
import "./transactionsTable.css";

const TransactionsTable = ({ hash, from, to, value }) => {
  return (
    <tr className="transactions_table">
      <td>{hash}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{formatBigNumber(value)}</td>
    </tr>
  );
};

export default TransactionsTable;

TransactionsTable.propTypes = {
  hash: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
};
