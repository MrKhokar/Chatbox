import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessagesForm = (props) => {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  // console.log(props);

  const handlesubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue(" ");
  };
  const handlechange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };
  const handleUpload = (event) => {
    // const fil = ;

    sendMessage(creds, chatId, {files: event.target.files,text: ""});

    console.log(creds, chatId);
  };
  return (
    <form className="message-form" onSubmit={handlesubmit}>
      <input
        className="message-input"
        placeholder="Send Messages"
        value={value}
        onChange={handlechange}
        onSubmit={handlesubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        id="upload-button"
        multiple={false}
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessagesForm;
