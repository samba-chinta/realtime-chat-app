import React  from "react";

import styles from "../styles/chat.module.css";
import ChatList from "../components/chatlist/ChatList";
import ChatRoom from "../components/chatroom/ChatRoom";
import { useParams } from "react-router-dom";

const ChatPage = ({ contactInfo }) => {
    const { user_id } = useParams();
    return (
        <div className={styles["chatpage-wrapper"]}>
            <ChatList chatList={contactInfo} />
            <ChatRoom user={contactInfo.filter(contact => contact.id === parseInt(user_id))[0]} />
        </div>
    );
};

export default ChatPage;
