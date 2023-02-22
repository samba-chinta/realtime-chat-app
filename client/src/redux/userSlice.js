import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_id: null,
    email: null,
}

const userSlice = createSlice({
    name: "user auth slice",
    initialState: initialState,
    reducers: {
        login: (state, { id, email }) => {
            state.user_id = id 
            state.email = email
        },
        logout: (state) => {
            state.email = null
            state.id = null
        }
    }
})

export const user_actions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;