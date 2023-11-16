import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser, logout } from '../../utils/user';

const initialState = {
    _id: null,
    profilePic: null,
    names: {
        first: null,
        middle: null,
        last: null
    },
    username: null,
    notification: null,
    isAdmin: false,
    loading: true,
    noUser: true,
};

export const authenticateUser = createAsyncThunk('auth', fetchUser);
export const logUserOut = createAsyncThunk('auth/logout', logout);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearNotification: (state) => {
            state.notification = null;
        },
        clearUser: (state) => {
            state._id = null;
            state.profilePic = null;
            state.names = { first: null, middle: null, last: null };
            state.loading = true;
            state.noUser = true;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(authenticateUser.pending, (state) => {
                state.loading = true;
                state.noUser = true;
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                const userData = action.payload;
                userData.loading = false;
                userData.noUsser = false;
                return userData;
            })
            .addCase(authenticateUser.rejected, (state) => {
                state.loading = false;
                state.noUser = true;
            })
            .addCase(logUserOut.pending, (state) => {
                state.loading = true
            })
            .addCase(logUserOut.fulfilled, () => {
                const clearState = { ...initialState };
                clearState.loading = false;
                return initialState
            })
            .addCase(logUserOut.rejected, (state) => {
                state.loading = false;
            })
    }
});

export const { clearUser, clearNotification } = userSlice.actions;

export default userSlice.reducer;
