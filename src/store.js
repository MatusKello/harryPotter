import { configureStore } from '@reduxjs/toolkit';
import potterReducer from './apiSlice';

const store = configureStore({
  reducer: {
    potter: potterReducer,
  },
});

export default store;
