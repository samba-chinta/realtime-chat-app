import React from "react";

import styles from "../../styles/chat.module.css";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatSender from "./ChatSender";
import Display from "../UI/Display";

const ChatRoom = ({ user }) => {
    return (
        <div className={styles["chat-room__wrapper"]}>
            {user && (
                <>
                    <ChatRoomHeader contactName={user.username} />
                    <div className={styles["msg_wrapper"]}>
                        <h3>
                            Say &#128075; to "{user.username}" &#128640;
                        </h3>
                    </div>
                    <ChatSender />
                </>
            )}
            {!user && <Display/>}
        </div>
    );
};

export default ChatRoom;
