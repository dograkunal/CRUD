import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

//slice reducer method practice

export const { increase, decrease } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
