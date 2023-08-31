import React from "react";
import UserNavbar from "./UserNavbar";
import ItemsGrid from "../containers/ItemsGrid";
import './Menu.css'

const Menu = () => {
  return (
    <div className="min-vw-100">
      <UserNavbar />
      <div className="border d-flex align-items-center m-5">
        <div className="">
          <img
            src="/public/images/menu_pic.png"
            alt="Logo"
            className="img-fluid img1"
          />
        </div>
            <ItemsGrid/>
      </div>
    </div>
  );
};

export default Menu;
