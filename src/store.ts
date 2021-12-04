import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
