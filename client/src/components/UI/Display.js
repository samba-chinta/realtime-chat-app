import React from "react";

import styles from "../../styles/display.module.css";

const Display = () => {
    return (
        <div className={styles["wrapper"]}>
            <h2>Connect to your World</h2>
            <span>Select contact on left panel to start your Chat</span>
        </div>
    );
};

export default Display;
