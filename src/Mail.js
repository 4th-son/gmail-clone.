import React from "react";
import "./mail.css";
import { IconButton } from "@mui/material";
import {
  ArrowBack,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Mail() {
  const navigate = useNavigate();
  return (
    <div className="mail flex-1 bg-zinc-100">
      <div className="mail__tools flex justify-between bg-white">
        <div className="mail__toolsLeft flex">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body flex flex-col m-8 h-screen bg-white p-5 shadow-xl shadow-zinc-500 ">
        <div className="mail__bodyHeader flex items-center border-b border-gray-300 relative p-5">
          <h2 className=" text-base font-bold mr-5 ">Subject</h2>
          <LabelImportant className="mail__important fill-yellow-500" />
          <p className="ml-4">Title</p>
          <p className="mail__time absolute top-6 right-0 text-xs text-slate-800">
            10pm
          </p>
        </div>
        <div className="mail__message p-5 mr-5 break-words ">
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            dicta at id enim, obcaecati nihil ratione, voluptatibus impedit
            architecto officiis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure aspernatur esse dignissimos rem atque ipsum
            facere cum itaque obcaecati optio ab, deleniti veritatis quasi,
            accusantium enim aliquid debitis nesciunt fuga?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
