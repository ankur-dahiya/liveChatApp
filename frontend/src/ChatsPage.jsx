import { useEffect } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  useEffect(()=>{
    const chatfeed = document.getElementsByClassName("ce-chat-feed")[0];
    chatfeed.setAttribute("style","height: 100vh; position: relative; background-color: white;");
  },[])
  return (
    <div className="background" style={{ maxHeight: '100vh' }}> 
      <PrettyChatWindow
        projectId={import.meta.env.VITE_PID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;