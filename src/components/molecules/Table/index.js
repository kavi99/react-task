import React from "react";
import "./styles/index.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const Table = ({ res, th, editIconClick, deleteIconClick }) => {
  return (
    <table>
      <thead>
        <tr>
          {th.map((th, index) => (
            <th className="table-header" key={index}>
              {th.charAt(0).toUpperCase() + th.slice(1).toLowerCase()}
            </th>
          ))}
          <th className="table-header">Delete</th>
          <th className="table-header">Update</th>
        </tr>
      </thead>
      <tbody>
        {res.map((data) => (
          <tr className={data.id % 2 === 0 ? "" : "flak"} key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.date}</td>
            <td>{data.currency + " " + data.amount}</td>
            <td onClick={() => deleteIconClick(data)} className="table-icons">
              <DeleteIcon style={{ color: "#E71C23" }} />
            </td>
            <td onClick={() => editIconClick(data)} className="table-icons">
              <EditIcon style={{ color: "#F3B431" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  res: PropTypes.array.isRequired,
  th: PropTypes.array.isRequired,
};

Table.defaultProps = {
  res: [],
};

export default Table;
