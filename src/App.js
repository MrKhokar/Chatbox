import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem("username"))
    return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID="65032069-577c-4169-9381-447b3930c136"
      renderChatFeed={(chatAppProps) => (
        <ChatFeed {...chatAppProps} />
      )}
    />
  );
};
// shubham.kushwah;
export default App;
