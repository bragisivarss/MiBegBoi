import { createAppSlice } from "@/redux/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./searchAPI";

export interface CounterSliceState {
  value:  {objects: any[]};
  status: "idle" | "loading" | "failed";
}

const initialState: CounterSliceState = {
  value: {objects : []},
  status: "idle",
};

export const searchSlice = createAppSlice({
  name: "search",
  initialState,
  reducers: (create) => ({

    search: create.reducer(
      (state, action: PayloadAction<any>) => {
        state.value = action.payload;
      },
    ),

    searchAsync: create.asyncThunk(
      async ({ term, size }: { term: string; size: number }) => {
                const response = await fetchData(term, size)
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectValue: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
  },
});

export const {  searchAsync } =
  searchSlice.actions;

export const { selectValue, selectStatus } = searchSlice.selectors;

