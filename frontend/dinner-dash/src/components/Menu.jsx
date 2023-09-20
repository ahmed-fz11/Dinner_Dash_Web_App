import React from "react";
import UserNavbar from "./UserNavbar";
import ItemsGrid from "../containers/ItemsGrid";
import './Menu.css'

const Menu = () => {
  return (
    <div className="min-vw-100 min-vh-100 pg1">
      <UserNavbar />
      <ItemsGrid/>
    </div>
  );
};

export default Menu;
