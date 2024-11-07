import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardType } from '../types';
const initialState: BoardType[] = [];

export const recentPost = createSlice({
  name: 'recentPost',
  initialState,
  reducers: {
    addPost: (state: BoardType[], action: PayloadAction<BoardType>) => {
      const post = action.payload;

      const filteredState = state.filter((item) => item.id !== post.id);

      filteredState.unshift(post);

      if (filteredState.length > 10) filteredState.pop();

      return filteredState;
    }
  }
});

export const { addPost } = recentPost.actions;

export default recentPost.reducer;
