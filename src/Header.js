import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header flex justify-between border-b border-gray-300 sticky">
      <div className="header__left flex items-center">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <img
          className="object-contain h-12 ml-1"
          src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"
          alt=""
        />
        <h1 className=" text-3xl font-bold text-black-900 mb-4 pt-3 pl-1">
          Gmail
        </h1>
      </div>

      <div className="header__middle flex flex-none w-7/12 h-12 items-center bg-zinc-200 p-3 rounded-full mt-2">
        <SearchOutlinedIcon className=" text-gray-500" />
        <input
          className="border-none w-full p-2 outline-none text-base bg-transparent"
          placeholder="Search mail"
          type="text"
        />
        <ArrowDropDownOutlinedIcon className="header__inputCaret" />
      </div>

      <div className="flex pr-3 pt-3 items-center">
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
