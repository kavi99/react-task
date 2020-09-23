import React from "react";

const MyButton = ({ value }) => {
  return (
    <div className="btn-new-transaction">
      <div>+</div>
      <div>{value}</div>
    </div>
  );
};

export default MyButton;
