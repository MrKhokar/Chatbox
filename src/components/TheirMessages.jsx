const TheirMessages = ({ message, lastMessage }) => {
  const isFristmessage =
    !lastMessage || lastMessage.sender.username !==message.sender.username;
    
  return (
    <div className="message-row">
      {isFristmessage && (
        <div
          className="message-avatar"
          style={{backgroundImage: `url(${message?.sender?.avatar})`,
          }}></div>
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          
          style={{
            marginLeft: isFristmessage ? "4px" : "48px",
          }}
        />
      ) : (
        <div
          className="message"
          style={{
            marginLeft: isFristmessage ? "4px" : "48px",
            float: "left",
            backgroundColor: "#CABCDC",
          }}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessages;
