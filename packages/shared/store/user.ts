import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: UserType = {
  createdAt: '',
  id: '',
  name: '',
  googleImage: '',
  email: ''
};

export const user = createSlice({
  name: 'recentPost',
  initialState,
  reducers: {
    updateUser: (state: UserType, action: PayloadAction<UserType>) => {
      return { ...state, ...action.payload };
    },
    clearUser() {
      return initialState;
    }
  }
});

export const { updateUser, clearUser } = user.actions;

export default user.reducer;
