import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postslice'
import usersReducer from '../features/users/usersSlice'

export default configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
    }
})