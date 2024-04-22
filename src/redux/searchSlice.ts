import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialStateType } from "@/types";
import axios from "axios";

const initialState: InitialStateType = {
    loading: false,
    error: false,
    data: [],
};

export const fetchPackages = createAsyncThunk<string[], string>(
    "fetchPackages",
    async (term: string) => {
        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );

            const stuff = data.objects.map((obj: any) => {
                return obj.package.name;
            });
            return stuff;
        } catch (err) {
            //ERROR FIX HERE!
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPackages.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchPackages.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPackages.rejected, (state) => {
            state.error = true;
        });
    },
});
export default searchSlice.reducer;
