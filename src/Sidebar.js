import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SidebarOption from "./SidebarOption";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import SendIcon from "@mui/icons-material/Send";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        style={{ backgroundColor: "whitesmoke", color: "black" }}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
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
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
