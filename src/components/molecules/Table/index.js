import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import api from "../../../api";

const Table = () => {
  const [resData, setresData] = useState([]);
  const [thList, setthList] = useState([]);
  useEffect(() => {
    api(`https://5f69d98ad808b90016bc07e0.mockapi.io/api/v1/Transaction`)
      .then((res) => {
        setresData(res);
        const keys = Object.keys(res[0]);
        setthList(keys);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          {thList.map((th, index) => (
            <td key={index}>{th}</td>
          ))}
        </tr>
        {resData.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.date}</td>
            <td>{data.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
