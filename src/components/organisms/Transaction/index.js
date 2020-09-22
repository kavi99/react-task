import React from "react";
import Table from "../../molecules/Table";
import LeftMenu from "../../molecules/LeftMenu";
import Header from "../../molecules/Header";
import Button from "../../atoms/Button";
import api from "../../../api";
import "./styles/index.scss";

const Transaction = () => {
  const addTransaction = () => {
    alert(22);
  };
  return (
    <div className="container">
      <Header />
      <div className="content">
        <LeftMenu />
        <div className="table-content">
          <div className="btn-transaction">
            <div onClick={() => addTransaction()}>
              <Button value="New Transaction" />
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
