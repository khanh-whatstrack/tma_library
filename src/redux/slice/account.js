import { createSlice } from "@reduxjs/toolkit";

export const accountStore = createSlice({
  name: "account",
  initialState: {
    account: [],
  },
  reducers: {
    setAccount: (state, action) => {
      return {
        ...state,
        account: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount } = accountStore.actions;

export default accountStore.reducer;
