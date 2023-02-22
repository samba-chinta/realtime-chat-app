import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatPage from "./pages/ChatPage";
import PageNotFound from "./components/UI/PageNotFound";
// import { user_actions } from "./redux/userSlice";
// import { socket_actions } from "./redux/socketSlice";

const DUMMY_CONTACT_INFO = [
    {
        id: 1,
        username: "samba chinta",
    },
    {
        id: 2,
        username: "siva chinta",
    },
    {
        id: 3,
        username: "swapna tumu",
    },
    {
        id: 4,
        username: "amani busireddy",
    },
    {
        id: 5,
        username: "mahesh chinta",
    },
    {
        id: 6,
        username: "madhuri bollina",
    },
    {
        id: 7,
        username: "sampath angara",
    },
    {
        id: 8,
        username: "nani busireddy",
    },
];

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        if (localStorage.getItem("user-token")) {
        setIsLoggedIn(true);
        } else {
        setIsLoggedIn(false);
        }
    }, []);

    return (
        <div className="App">
            <Routes>
                {!isLoggedIn && <Route path="/" element={<Welcome />} exact />}
                {!isLoggedIn && <Route path="/auth/login" element={<Login />} exact />}
                {!isLoggedIn && <Route path="/auth/signup" element={<Signup />} exact />}
                {isLoggedIn && <Route path="/" element={<h1>Hello World</h1>} exact />}
                {isLoggedIn && <Route
                    path="/chat"
                    element={<ChatPage contactInfo={DUMMY_CONTACT_INFO} />}
                    exact
                />}
                {isLoggedIn && <Route
                    path="/chat/:user_id"
                    element={<ChatPage contactInfo={DUMMY_CONTACT_INFO} />}
                    exact
                />}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default App;
