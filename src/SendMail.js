import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
// import { useForm } from "react-hook-form";
// import { db } from "./firebase";

function SendMail() {
  // // const [formData, handleSubmit] = useState({
  // //   to: "",
  // //   subject: "",
  // //   message: "",
  // });
  const dispatch = useDispatch();
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="close__icon"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form>
        <input name="to" placeholder="To" type="email" />
        <input name="subject" placeholder="Subject" type="text" />
        <input
          name="message"
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
