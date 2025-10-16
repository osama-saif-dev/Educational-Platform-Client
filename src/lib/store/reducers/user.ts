import { IUser } from "@/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user: null as IUser | null,
    access_token: null as string | null
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: IUser; access_token: string }>) => {
            const { user, access_token } = action.payload;
            state.user = user;
            state.access_token = access_token
        },
        logout: (state) => {
            state.user = null;
            state.access_token = null
        }
    }
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer; 