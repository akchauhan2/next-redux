import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number | string; // Added id property
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

interface InitialState {
  users: User[];
}

const initialState: InitialState = { users: [] };
const initialDetailsSlice = createSlice({
  name: 'initialDetails',
  initialState,
  reducers: {
    fetchUsers() {},
    setUsers: (state, action: PayloadAction<User>) => {
      return { ...state, users: [...state.users, action.payload] };
    },
  },
});
export const { setUsers, fetchUsers } = initialDetailsSlice.actions;
export default initialDetailsSlice.reducer;
