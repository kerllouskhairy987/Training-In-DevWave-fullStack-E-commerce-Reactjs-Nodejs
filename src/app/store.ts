import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './features/globals'
import { dashboardApi } from './features/Dashboard/dashboardSlice'
import { shoppingApi } from './features/shopping/shoppingSlice'

export const store = configureStore({
    reducer: {
        globals: globalSlice,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [shoppingApi.reducerPath]: shoppingApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(dashboardApi.middleware)
            .concat(shoppingApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch