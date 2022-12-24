import { configureStore } from "@reduxjs/toolkit";
import bankReducer from '../slice/bankSlice'

/**
 * here we are creating out store where all the reducer will be pass 
 * if you have multiple reducer you can use combine reducer to combile all your reducer 
 * and pass final reducer here
 */
export const store = configureStore({
  reducer: bankReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
