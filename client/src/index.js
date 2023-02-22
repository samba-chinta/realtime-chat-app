// firebase config file
import "./config/firebase-config";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "./redux/store";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>
);
