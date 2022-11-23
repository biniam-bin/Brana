import counterReducer from '../features/counter/counterSclice'
import authReducer from '../features/auth/authSclice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}



const reducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);



export default configureStore({
    reducer: persistedReducer
})