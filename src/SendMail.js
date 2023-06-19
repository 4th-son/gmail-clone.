import React from "react";
import {
  AddToDrive,
  AttachFile,
  Close,
  DeleteOutline,
  InsertLink,
  InsertPhotoOutlined,
  LockOutlined,
  MoreVert,
  Remove,
  SentimentSatisfiedAlt,
  TextFormat,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const dispatch = useDispatch();

  return (
    <div className="sendMail absolute bottom-0 right-14 bg-zinc-300 h-4/5 w-3/5 max-w-lg rounded-tr-lg rounded-tl-lg flex flex-col border border-gray-400 shadow-xl ">
      <div className="sendMail__header flex justify-between items-center p-3 ">
        <h3 className=" text-zinc-600 font-semibold">New Message</h3>
        <div>
          <IconButton>
            <Remove />
          </IconButton>
          <IconButton>
            <Close
              className="close__icon cursor-pointer"
              onClick={() => dispatch(closeSendMessage())}
            />
          </IconButton>
        </div>
      </div>
      <form className=" flex flex-1 flex-col">
        <input
          name="Receipient"
          placeholder="Receipient"
          type="email"
          className=" h-7 p-2  border-b border-gray-300 outline-none"
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          className=" h-7 p-2  border-b border-gray-300 outline-none"
        />
        <input
          className="sendMail__message h-7 p-4 border-none  outline-none flex-auto "
          name="message"
          placeholder="Message..."
          type="text"
        />
        <div className="sendmail__options items-center flex flex-row">
          <Button
            className="sendMail__send bg-blue-700 m-4 capitalize rounded-full "
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
          <IconButton>
            <TextFormat />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <InsertLink />
          </IconButton>
          <IconButton>
            <SentimentSatisfiedAlt />
          </IconButton>
          <IconButton>
            <AddToDrive />
          </IconButton>
          <IconButton>
            <InsertPhotoOutlined />
          </IconButton>
          <IconButton>
            <LockOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <IconButton>
            <DeleteOutline className=" ml-7" />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
