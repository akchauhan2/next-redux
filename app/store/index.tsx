import { configureStore } from '@reduxjs/toolkit';
import { appReducers } from './reducers';

const store = configureStore({
  reducer: appReducers,
});

export type RootState = ReturnType<typeof store.getState>; // Added RootState export
export default store;
