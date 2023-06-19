import React from "react";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/mail")}
      className="flex items-center h-12 border-b border-gray-300 z-50 cursor-pointer hover:border-t hover:border-gray-400 hover:shadow-md"
    >
      <div className="emailrow__options flex">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow__title text-sm font-bold text-black w-40">
        {title}
      </h3>
      <div className="emailRow__message flex flex-grow=0 flex-shrink=0 flex-basis=80 items-center text-sm">
        <h4 className=" whitespace-nowrap overflow-hidden overflow-ellipsis pl-1 pr-1 text-md font-bold text-black w-2/4">
          {subject} -
          <span className="emailRow__description font-normal text-gray-500">
            {" "}
            {description}
          </span>
        </h4>
      </div>
      <p className="emailRow__time pr-5 text-xs font-bold "> {time}</p>
    </div>
  );
}

export default EmailRow;
