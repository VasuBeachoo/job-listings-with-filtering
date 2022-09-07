import { createSlice } from "@reduxjs/toolkit";

const jobFilterSlice = createSlice({
  name: "jobFilter",
  initialState: {
    filters: [],
  },
  reducers: {
    addFilter: (state, action) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter((text) => text !== action.payload);
    },
    clearFilters: (state) => {
      state.filters = [];
    },
  },
});

export default jobFilterSlice;
export const { addFilter, removeFilter, clearFilters } = jobFilterSlice.actions;
