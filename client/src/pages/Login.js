import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { Navigate } from "react-router-dom";

// importing auth hook
import useAuth from "../hooks/useAuth";
import Toast from "../components/portals/Toast";

import styles from "../styles/auth.module.css";

const Login = () => {
    const { userSignIn } = useAuth();

    //states
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [validateError, setValidateError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // refs
    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        // retrieve the data
        const userEmail = userEmailRef.current.value;
        const userPassword = userPasswordRef.current.value;

        if (!userEmail || !userPassword) {
            setValidateError("All fields must be filled");
            return;
        }

        setIsLoading(true);

        // calling 'userSignIn' method defined in 'useAuth'
        try {
            const res = await userSignIn(userEmail, userPassword);
            localStorage.setItem("user-token", res.user.accessToken);
            setResponse(res);
        } catch (err) {
            setError(err);
        }

        // reset the value
        setIsLoading(false);
        userEmailRef.current.value = "";
        userPasswordRef.current.value = "";
    };

    console.log(response);

    return (
        <div className={styles["auth-wrapper"]}>
            <form className={styles["auth-form__wrapper"]} onSubmit={formSubmitHandler}>
                {
                    response && <Navigate to={`/chat`} />
                }
                {
                    // showing loading message
                    isLoading &&
                        createPortal(
                            <Toast
                                toastMessage="Loading....."
                                toastType="information"
                            />,
                            document.getElementById("toast")
                        )
                }
                {
                    // showing validation errors
                    validateError &&
                        createPortal(
                            <Toast
                                toastMessage={validateError}
                                toastType="error"
                            />,
                            document.getElementById("toast")
                        )
                }
                {
                    // showing successfull user creation
                    response &&
                        createPortal(
                            <Toast
                                toastMessage="Successfully Account Created!"
                                toastType="success"
                            />,
                            document.getElementById("toast")
                        )
                }
                {
                    // showing failure of account creation
                    error &&
                        createPortal(
                            <Toast
                                toastMessage="Sorry, Couldn't Create Account!"
                                toastType="error"
                            />,
                            document.getElementById("toast")
                        )
                }

                <h3>Login into App</h3>
                <input
                    type="email"
                    placeholder="Email Address"
                    ref={userEmailRef}
                    className={styles["form-field"]}
                />
                <input
                    type="password"
                    placeholder="Password"
                    ref={userPasswordRef}
                    className={styles["form-field"]}
                />
                <label
                    htmlFor="remember-me"
                    className={styles["form-checkbox"]}
                >
                    <input type="checkbox" id="remember-me" />
                    <span>remember me</span>
                </label>
                <input
                    type="submit"
                    value="Login"
                    className={`${styles["form-field"]} ${styles["form-submit__btn"]}`}
                />
                <Link to="/auth/signup" className={styles["form-link"]}>
                    Don't have an Account? Sign Up
                </Link>
            </form>
        </div>
    );
};

export default Login;
