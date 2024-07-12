import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import { HomeVideosReducer } from "./reducers/VideoReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: HomeVideosReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
