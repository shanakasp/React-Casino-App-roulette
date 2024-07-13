import { Avatar, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar></Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/">CryPrince</Link>
        </Typography.Title>
      </div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
