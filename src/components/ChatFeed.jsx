import MessagesForm from "./MessagesForm";
import TheirMessages from "./TheirMessages";
import MyMessages from "./MyMessages";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  // Destucturing items from the props from above
  const chat = chats && chats[activeChat];
  // console.log(chat);
  const renderReceipts = (message, isMyMessage) => {
    // console.log(chat);
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipts"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };
  // above function is for chat-receipt

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastmessagekey =
        index === 0 ? null : key[index - 1];
      const isMyMessage =
        userName === message.sender.username;

      return (
        <div
          key={`msg_${index}`}
          style={{
            width: "100%",
          }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessages message={message} />
            ) : (
              <TheirMessages
                message={message}
                lastMessage={message[lastmessagekey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}>
            {renderReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading...";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map(
            (person) => `${person.person.username} `
          )}
        </div>
      </div>
      {renderMessages()}
      <div
        style={{
          height: "100px",
        }}
      />
      <div className="message-form-container">
        <MessagesForm chatId={activeChat} {...props} />
      </div>
    </div>
  );
};
export default ChatFeed;
