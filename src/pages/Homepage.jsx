import React from "react";
import PropTypes, { bool } from "prop-types";

/* COMPONENTS */
import TablesContainer from "../components/tablesContainer";

/* STYLES */
import "./homepage.css";

const Homepage = ({
  blocksData,
  isFirstBlockFetched,
  transactionsTableData,
  setTransactionsTableData,
}) => {
  return (
    <div className="root">
      <h1>Ethereum Panel</h1>
      <TablesContainer
        blocksData={blocksData}
        transactionsTableData={transactionsTableData}
        setTransactionsTableData={setTransactionsTableData}
        isFirstBlockFetched={isFirstBlockFetched}
      />
    </div>
  );
};

export default Homepage;

Homepage.propTypes = {
  blocksData: PropTypes.instanceOf(Array).isRequired,
  transactionsTableData: PropTypes.instanceOf(Array),
  setTransactionsTableData: PropTypes.func.isRequired,
  isFirstBlockFetched: PropTypes.bool,
};

Homepage.defaultProps = {
  transactionsTableData: null,
  isFirstBlockFetched: bool,
};
