import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsSliceReducer from "../features/posts/postsSlice";
import usersSliceReducer from '../features/users/usersSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsSliceReducer,
        users: usersSliceReducer,
    }
})