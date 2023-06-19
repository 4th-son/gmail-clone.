import React from "react";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  Settings,
} from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import { IconButton, Checkbox } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex sticky top-0 border-b border-gray-300 justify-between bg-white z-10 pr-4">
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
          <IconButton></IconButton>
        </div>
      </div>
      <div className="flex relative top-0 border-b border-gray-300 z-0 ">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73EA" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="pb-6 ">
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
