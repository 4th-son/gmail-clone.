import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function SendMail() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = () => {
  // console.log(data);
  // };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="close__icon" />
      </div>
      <form>
        <input
          name="To"
          placeholder="To"
          type="text"
          // ref={register({ required: true })}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          // ref={register({ required: true })}
        />
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          // ref={register({ required: true })}
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
