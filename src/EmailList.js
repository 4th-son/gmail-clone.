import React from "react";
import "./EmailList.css";
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
    <div className="emailList">
      <div className="emailList__settings">
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
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73EA" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailLists__lists">
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="hey fellows hackers"
          description="this is a test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
