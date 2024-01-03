import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { PostsReducer } from "./PostsReducer"

export const store = createStore(PostsReducer, applyMiddleware(thunk))