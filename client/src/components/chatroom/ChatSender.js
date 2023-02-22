import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

import styles from "../../styles/chat.module.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";

const ChatSender = (props) => {
    const [message, setMessage] = useState("");

    const onChatSubmitted = (e) => {
        e.preventDefault();
        console.log(message);
        setMessage("");
    }

    return (
        <div className={styles["chat-sender__wrapper"]}>
            <form className={styles["chat-send__form"]} onSubmit={onChatSubmitted}>
                <label htmlFor="file-uploader" className={styles["icon"]}>
                    <AttachmentIcon />
                </label>
                <input
                    type="file"
                    className={styles["file-uploader"]}
                    name="file-uploader"
                    id="file-uploader"
                />
                <div className={styles["msg-input"]}>
                    <InputEmoji
                        placeholder="Type the Message..."
                        borderColor="#000000"
                        borderRadius={10}
                        value={message}
                        onChange={setMessage}
                    />
                </div>
                <button className={styles["icon"]}>
                    <SendIcon className={styles["send-btn"]} />
                </button>
            </form>
        </div>
    );
};

export default ChatSender;
