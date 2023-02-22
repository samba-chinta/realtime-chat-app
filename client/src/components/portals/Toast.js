import React from "react";

import styles from "../../styles/toast.module.css";

const Toast = ({ toastMessage, toastType }) => {
    let classes =
        toastType === "information"
            ? `${styles["toast-wrapper"]} ${styles["info"]}`
            : toastType === "error"
            ? `${styles["toast-wrapper"]} ${styles["error"]}`
            : toastType === "success"
            ? `${styles["toast-wrapper"]} ${styles["success"]}`
            : `${styles["toast-wrapper"]}`;

    return (
        <div className={classes}>
            <p className={styles["toast"]}>{toastMessage}</p>
        </div>
    );
};

export default Toast;
