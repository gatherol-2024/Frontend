import { createSlice } from '@reduxjs/toolkit';
import { BoardType } from '../types';
const initialState: BoardType[] = [];

export const recentPost = createSlice({
  name: 'recentPost',
  initialState,
  reducers: {
    addPost: (state: BoardType[], action) => {
      const post = action.payload;

      const filteredState = state.filter((item) => item.id !== post.id);

      filteredState.push(post);

      if (filteredState.length > 10) filteredState.shift();

      return filteredState;
    }
  }
});

export const { addPost } = recentPost.actions;

export default recentPost.reducer;
