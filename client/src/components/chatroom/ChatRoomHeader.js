import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideoChatIcon from '@mui/icons-material/VideoChat';

import styles from "../../styles/chat.module.css";

const ChatRoomHeader = (props) => {
    return (
        <div className={styles["chatroom-header__wrapper"]}>
            <p className={styles["contact-name"]}>
                {props.username ? props.username : "Samba Chinta"}
            </p>
            <div className={styles["multimedia__wrapper"]}>
                <button className={styles["icon"]}>
                    <LocalPhoneIcon fontSize="small"/>
                </button>
                <button className={styles["icon"]}>
                    <VideoChatIcon fontSize="small"/>
                </button>
            </div>
        </div>
    );
};

export default ChatRoomHeader;
