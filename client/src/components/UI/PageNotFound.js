import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pagenotfound.module.css";

const PageNotFound = (props) => {
    return (
        <div className={styles["wrapper"]}>
            <h2>OOPS! Page not found </h2>
            <Link to="/">return to home</Link>
        </div>
    );
};

export default PageNotFound;
