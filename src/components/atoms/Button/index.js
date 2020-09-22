import React from "react";

const Button = ({ value }) => {
  return (
    <div className="btn-new-transaction">
      <div>+</div>
      <div>{value}</div>
    </div>
  );
};

export default Button;
