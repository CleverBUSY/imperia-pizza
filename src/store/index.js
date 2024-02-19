import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { catalogReducer } from "./slice/categoryFood"
import { productsReducer } from "./slice/productReducer"
// import { userReducer } from "./slice/userReducer"
import orderReducer from "./slice/orderReducer" // Импортируйте как default
import paginationReducer from "./slice/paginationReducer"

const rootReducer = combineReducers({
    catalog: catalogReducer,
    products: productsReducer,
    // user: userReducer,
    orders: orderReducer, // Используйте orderReducer как default импорт
    pagination : paginationReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store; // Экспортируйте только store как default
