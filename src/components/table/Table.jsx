import React from "react";
import PropTypes from "prop-types";

/* HELPERS */
import getHeader from "../../helpers/getHeader.helper";

/* STYLES */
import "./table.css";

const Table = ({ HEADER, children }) => {
  return (
    <table className="table_root">
      <thead>
        <tr>{HEADER.map(getHeader)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  HEADER: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.node.isRequired,
};
