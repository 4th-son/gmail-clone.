import React from "react";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  LocalOffer,
  ModeEditOutline,
  MoreVert,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import { IconButton, Checkbox } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailRow from "./EmailRow";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";

function EmailList() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="hidden md:flex sticky top-0 border-b border-gray-300 justify-between bg-white z-10 pr-4">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="flex h-8 md:hidden ">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <IconButton>
          <ModeEditOutline className=" bg-red-700 rounded-sm" />
        </IconButton>
      </div>
      <div className="flex items-center pl-2 md:hidden">
        <SearchOutlined className=" text-zinc-500" />
        <input
          className="border-none p-2 outline-none text-base bg-transparent"
          placeholder="Search mail"
          type="text"
        />
      </div>
      <div className=" hidden md:flex relative top-0 border-b border-gray-300 z-0 ">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73EA" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className=" pb-6">
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css "
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a text testing the display of the email screen while redecorating with tailwind css"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
