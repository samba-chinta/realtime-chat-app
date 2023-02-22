import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

// importing auth hook
import useAuth from "../hooks/useAuth";

import Toast from "../components/portals/Toast";
import styles from "../styles/auth.module.css";

const Signup = () => {
    const { userSignUp } = useAuth();

    //states
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [validateError, setValidateError] = useState(null);

    // reset validateError after 5s
    useEffect(() => {
        setTimeout(() => {
            setValidateError(null);
            setIsLoading(false);
        }, 5000);
    }, [validateError, isLoading]);

    // refs
    const userEmailRef = useRef();
    const userPasswordRef = useRef();
    const userConfirmPasswordRef = useRef();
    const usernameRef = useRef();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("e");
        // retrieve the data
        const userEmail = userEmailRef.current.value;
        const userPassword = userPasswordRef.current.value;
        const userConfirmPassword = userConfirmPasswordRef.current.value;
        const username = usernameRef.current.value;
        
        // validation
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!userEmail || !userPassword || !userConfirmPassword || !username) {
            setValidateError("All fields must be filled");
            return;
        } else if (!emailRegex.test(userEmail)) {
            setValidateError("Invalid Email Address");
            return;
        } else if (userPassword.length < 8) {
            setValidateError("Password length must be atleast 8");
            return;
        } else if (userPassword !== userConfirmPassword) {
            setValidateError("Both Passwords must match with each other");
            return;
        }

        setIsLoading(true); // setting as loading

        // calling 'userSignUp' method defined in 'useAuth'
        try {
            const res = await userSignUp(userEmail, userPassword);
            setResponse(res);
        } catch (err) {
            setError(err);
        }

        // reset the value
        setIsLoading(false);
        userEmailRef.current.value = "";
        userPasswordRef.current.value = "";
        userConfirmPasswordRef.current.value = "";
        usernameRef.current.value = "";
    };

    return (
        <div className={styles["auth-wrapper"]}>
            <form
                className={styles["auth-form__wrapper"]}
                onSubmit={formSubmitHandler}
            >
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

                <h3>Signup into App</h3>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    ref={userConfirmPasswordRef}
                    className={styles["form-field"]}
                />
                <input
                    type="text"
                    placeholder="Username"
                    ref={usernameRef}
                    className={styles["form-field"]}
                />
                <input
                    type="submit"
                    value="Sign Up"
                    className={`${styles["form-field"]} ${styles["form-submit__btn"]}`}
                />
                <Link to="/auth/login" className={styles["form-link"]}>
                    Already have an Account? Log in
                </Link>
            </form>
        </div>
    );
};

export default Signup;
