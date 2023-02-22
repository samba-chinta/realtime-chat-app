// Loading Component using to show loading animation
// to users when some data is fetching behind the scenes

import React from "react";

// Style
import styles from "../styles/loading.module.css";

const Loading = (props) => {
    return (
        <div className={styles["animation-wrapper"]}>
            <span className={styles["loader"]}>
                <span className={styles["loading-indicator"]}></span>
            </span>
        </div>
    );
};

export default Loading;
