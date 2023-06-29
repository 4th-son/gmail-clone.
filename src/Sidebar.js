import React from "react";

import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SidebarOption from "./SidebarOption";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import SendIcon from "@mui/icons-material/Send";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import { LabelImportant } from "@mui/icons-material";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar hidden md:block  w-72 pr-5">
      <Button
        style={{ backgroundColor: "whitesmoke" }}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose mt-5 ml-3 mb-4 capitalize bg-zinc-200 rounded-full p-3 font-semibold text-zinc-500 "
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={55}
        selected={true}
      />
      <SidebarOption Icon={StarBorderIcon} title="Stared" number={400} />
      <SidebarOption
        Icon={LabelImportantOutlinedIcon}
        title="Important"
        number={85}
      />
      <SidebarOption Icon={SendIcon} title="Sent" number={55} />
      <SidebarOption Icon={NoteIcon} title="Draft" number={55} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={55} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons flex items-center justify-between flex-1 mt-6">
          <p className=" font-bold text-zinc-500 ml-4 ">Label</p>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
        <div className=" block ">
          <SidebarOption Icon={LabelImportant} title="Notes" />
          <SidebarOption Icon={LabelImportant} title="Spam" />
          <SidebarOption Icon={LabelImportant} title="Unwanted" />
          <SidebarOption Icon={LabelImportant} title="More" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
