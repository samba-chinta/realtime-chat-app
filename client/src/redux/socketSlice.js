import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const initialState = {
    socket: null
}

const socketSlice = createSlice({
    name: "Socket Slice",
    initialState: initialState,
    reducers: {
        establishSocketConnection: (state, payload) => {
            const socket = io(payload.SOCKET_URL, {
                withCredentials: true
            });
            socket.emit('set-user-id', "Good Morning");
            state.socket = socket;
        },
        disconnectSocket: (state) => {
            state.socket.disconnect();
        }
    }
})

export const socket_actions = socketSlice.actions;
const socketReducer = socketSlice.reducer;
export default socketReducer;