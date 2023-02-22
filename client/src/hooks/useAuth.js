import { useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const useAuth = () => {
    const [isSignOut, setIsSignOut] = useState(false);

    const auth = getAuth();

    const userSignUp = async (userEmail, userPassword) => {
        console.log("hi")
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                userEmail,
                userPassword
            );
            console.log(res)
            return res;
        } catch (err) {
            return err;
        }
    };

    const userSignIn = async (userEmail, userPassword) => {
        try {
            const res = await signInWithEmailAndPassword(
                auth,
                userEmail,
                userPassword
            );
            return res;
        } catch (err) {
            return err;
        }
    };

    const userSignOut = async () => {
        try {
            const res = await signOut(auth);
            setIsSignOut(true);
            return res;
        } catch (err) {
            return err;
        }
    };

    return {
        isSignOut,
        userSignIn,
        userSignOut,
        userSignUp,
    };
};

export default useAuth;
