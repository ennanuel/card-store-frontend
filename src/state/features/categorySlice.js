import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPlayers, fetchSports, fetchTeams } from '../../utils/card';

const initialState = {
    players: [],
    teams: [],
    sports: [],
    loading: true
};

export const fetchCategories = createAsyncThunk('fetchCategories', async function () {
    try {
        const [players, teams, sports] = await Promise.all([fetchPlayers(), fetchTeams(), fetchSports()]);
        return { players, teams, sports };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
})

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        clearCategories: (state) => {
            state.players = [];
            state.teams = [];
            state.sports = [];
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.players = action.payload.players;
                state.teams = action.payload.teams;
                state.sports = action.payload.sports;
                state.loading = false;
            })
    }
});

export const { clearCategories } = categorySlice.actions;

export default categorySlice.reducer;
