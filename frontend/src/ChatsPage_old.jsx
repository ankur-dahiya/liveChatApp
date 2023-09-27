import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic("ff77fc59-1a35-4a3c-99e3-65162f737581",
    props.user.username,
    props.user.secret)
    return <div style={{height:"100vh"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>;
  };
  export default ChatsPage;
  