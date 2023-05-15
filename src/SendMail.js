import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="close__icon" />
      </div>
      <form>
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
        />
        <div className="sendmail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;