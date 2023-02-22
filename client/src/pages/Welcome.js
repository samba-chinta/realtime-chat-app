import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import styles from "../styles/welcome.module.css";

const Welcome = (props) => {
    return (
        <div className={styles["welcome-page__wrapper"]}>
            <div className={styles["page-main__container"]}>
                <h1 className={styles["app-tagline"]}>
                    Connect to Your World!
                </h1>
                <div className={styles["links-container"]}>
                    <button className={styles["link-btn"]}>
                        <LoginIcon />
                        <Link to="/auth/login">Log In</Link>
                    </button>
                    <button className={styles["link-btn"]}>
                        <PersonAddAltIcon/>
                        <Link to="/auth/signup">Sign Up</Link>
                    </button>
                    <button className={styles["link-btn"]}>
                        <ChatBubbleOutlineIcon/>
                        <Link to="/chat">Chat</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
