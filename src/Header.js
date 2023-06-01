import React from "react";
import "./header.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <img
          src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"
          alt=""
        />
        <h1>Gmail</h1>
      </div>

      <div className="header__middle">
        <SearchOutlinedIcon />
        <input placeholder="search mail" type="text" />
        <ArrowDropDownOutlinedIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
