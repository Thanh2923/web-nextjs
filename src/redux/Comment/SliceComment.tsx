import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Comment: [],
};

export const SliceComment = createSlice({
  name: 'Comment',
  initialState,
  reducers: {
    fetchDataComment(state, action) {
      state.Comment = action.payload;
    },
    addComment(state, action) {
        state.Comment.push(action.payload);
    },
   
    
  },
});

export const { fetchDataComment, addComment } = SliceComment.actions;

