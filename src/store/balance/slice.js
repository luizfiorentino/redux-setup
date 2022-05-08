import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    // "deposit is the key of the reducer"
    deposit: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    withdraw: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    reset: (state, action) => {
      state.amount = initialState.amount;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding acions
// Add the newly created key to our export statement
export const { deposit, withdraw, reset } = balanceSlice.actions;

export default balanceSlice.reducer;
