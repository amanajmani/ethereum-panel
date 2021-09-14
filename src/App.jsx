import React, { useState, useEffect } from "react";

/* COMPONENTS */
import Homepage from "./pages/Homepage";

/* SERVICES */
import provider from "./services/provider.services";

const handleBlocksData = (block, blocksData) => {
  const tempBlocksData = blocksData;
  // To limit to the ten latest blocks
  if (blocksData.length >= 10) {
    tempBlocksData.shift();
  }
  tempBlocksData.push(block);

  return tempBlocksData;
};

function App() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [isFirstBlockFetched, setIsFirstBlockFetched] = useState(false);
  const [transactionsTableData, setTransactionsTableData] = useState(null);
  const [blocksData, setBlocksData] = useState([]);

  function subscribe() {
    provider.on("block", (number) => {
      // only set unique block numbers
      if (!blockNumber || number !== blockNumber) {
        setBlockNumber(number);
      }
    });
  }

  useEffect(() => {
    // subscribe to block event
    subscribe();
  }, []);

  useEffect(() => {
    if (blockNumber) {
      provider.getBlockWithTransactions(blockNumber).then((block) => {
        setBlocksData(handleBlocksData(block, blocksData));
        setIsFirstBlockFetched(true);
      });
    }
  }, [blockNumber]);

  return (
    <Homepage
      blocksData={blocksData}
      transactionsTableData={transactionsTableData}
      setTransactionsTableData={setTransactionsTableData}
      isFirstBlockFetched={isFirstBlockFetched}
    />
  );
}

export default App;
