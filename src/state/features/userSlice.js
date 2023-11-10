import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser } from '../../utils/user';

const initialState = {
    _id: null,
    profilePic: null,
    names: {
        first: null,
        middle: null,
        last: null
    },
    isAdmin: false,
    loading: true,
    noUser: true,
};

export const authenticateUser = createAsyncThunk('auth', fetchUser)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
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
                state._id = userData._id;
                state.names = userData.names;
                state.profilePic = userData.profilePic;
                state.loading = false;
                state.noUser = false
            })
            .addCase(authenticateUser.rejected, (state) => {
                state.loading = false;
                state.noUser = true;
            })
    }
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
