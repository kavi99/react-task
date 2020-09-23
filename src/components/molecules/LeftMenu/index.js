import React from "react";

const LeftMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu-text-content">
          <span>Dashboard</span>
        </div>
        <div className="menu-text-content-active">
          <span>Transactions</span>
        </div>
        <div className="menu-text-content">
          <span>Accounts</span>
        </div>
        <div className="menu-text-content">
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
