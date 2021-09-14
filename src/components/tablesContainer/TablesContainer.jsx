import React from "react";
import PropTypes, { bool } from "prop-types";

/* COMPONENTS */
import BlocksTable from "../blocksTable";
import TransactionsTable from "../transactionsTable";
import Table from "../table/Table";

/* CONSTANTS */
import BLOCKS_TABLE_HEADER from "../../constants/blocksTableHeader.constants";
import TRANSACTIONS_TABLE_HEADER from "../../constants/transactionsTableHeader.constants";

/* UTILS */
import validateArray from "../../utils/validateArray.utils";

/* STYLES */
import "./tablesContainer.css";

const TablesContainer = ({
  blocksData,
  isFirstBlockFetched,
  transactionsTableData,
  setTransactionsTableData,
}) => {
  if (!isFirstBlockFetched) {
    return (
      <div className="loader_container">
        <div className="loader" />
      </div>
    );
  }

  return (
    <div className="tables_container">
      {/* BLOCKS TABLE */}
      <div className="blocks_table">
        <h2>Blocks Table</h2>
        <Table HEADER={BLOCKS_TABLE_HEADER}>
          {blocksData.map((block) => (
            <BlocksTable
              key={block.hash}
              blockNumber={block.number}
              timeStamp={block.timestamp}
              blockHash={block.hash}
              transactions={block.transactions}
              gasLimit={block.gasLimit}
              setTransactionsTableData={setTransactionsTableData}
            />
          ))}
        </Table>
      </div>

      {/* TRANSACTIONS TABLE */}
      {validateArray(transactionsTableData) && (
        <div>
          <h2>Transactions Table</h2>
          <Table HEADER={TRANSACTIONS_TABLE_HEADER}>
            {transactionsTableData.map((block) => (
              <TransactionsTable
                key={block.hash}
                hash={block.hash}
                from={block.from}
                to={block.to}
                value={block.value}
              />
            ))}
          </Table>
        </div>
      )}
    </div>
  );
};

export default TablesContainer;

TablesContainer.propTypes = {
  blocksData: PropTypes.instanceOf(Array).isRequired,
  transactionsTableData: PropTypes.instanceOf(Array),
  setTransactionsTableData: PropTypes.func.isRequired,
  isFirstBlockFetched: PropTypes.bool,
};

TablesContainer.defaultProps = {
  transactionsTableData: null,
  isFirstBlockFetched: bool,
};
