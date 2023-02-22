import React from "react";

import ChatContact from "./ChatContact";
import User from "./User";
import AddIcon from "@mui/icons-material/Add";
import styles from "../../styles/chat.module.css";

const ChatList = (props) => {

    return (
        <div className={styles["chatlist-wrapper"]}>
            <button className={styles["new-chat__btn"]}>
                <AddIcon />
                New Chat
            </button>
            <div className={styles["chatlist"]}>
                {props.chatList.map((contact) => (
                    <ChatContact
                        key={Math.random()}
                        user_id={contact.id}
                        username={contact.username}
                    />
                ))}
            </div>
            <User username="Anonymous User"/>
        </div>
    );
};

export default ChatList;
