import React from "react";

import LogoutIcon from '@mui/icons-material/Logout';

import styles from "../../styles/user.module.css";

const User = (props) => {
    return (
        <div className={styles["user-info"]}>
            <button className={styles["logout__btn"]}>
                <LogoutIcon/>
                <span>Logout {`( ${props.username} )`}</span>
            </button>
        </div>
    );
};

export default User;
