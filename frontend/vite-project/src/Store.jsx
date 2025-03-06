import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Correct import for localStorage

const persistConfig = {
    key: "cartData",
    storage,
};

const persistedReducer = persistReducer(persistConfig, cardReducer);

const store = configureStore({
    reducer: {
        mycart: persistedReducer
    }
});

export const persistor = persistStore(store);

export default store;