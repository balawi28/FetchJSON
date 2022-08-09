import { createSlice } from '@reduxjs/toolkit';

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState: { value: [] },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
    },

    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { setUsers, addUser } = usersListSlice.actions;
export default usersListSlice.reducer;
