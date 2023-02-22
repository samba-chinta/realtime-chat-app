import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import styles from "../../styles/chat.module.css";

const ChatContact = ({ user_id, username }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            className={styles["contact-wrapper"]}
            onClick={(e) => {
                setIsSelected(true);
            }}
        >
            {isSelected && <Navigate to={`/chat/${user_id}`} />}
            <ChatBubbleOutlineIcon />
            <p className={styles["contact-name"]}>{username}</p>
        </div>
    );
};

export default ChatContact;
