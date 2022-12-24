import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IBank {
  money: number;
}

// Define the initial state using that type
const initialState: IBank = {
  money: 0,
};

export const bankSlice = createSlice({
  name: "bank",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    /**
     * @param state Your previous state if there is no then initial state
     * @param action action is basically request that you are going to fulfil 
     */
    deposite: (state, action) => {
      state.money += action.payload;
    },
    withdraw: (state, action) => {
      state.money -= action.payload;
    },
  },
});

/**
 * thease two deposite and withdraw are actions that will be dispatched from component
 */
export const { deposite, withdraw } = bankSlice.actions;

/**
 * this is default export of reducer that will fulfil the action with store
 */
export default bankSlice.reducer;
