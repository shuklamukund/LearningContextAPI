import {configureStore} from "@reduxjs/toolkit";
import chartReducer from "./slice/chartSlice";

export const store=configureStore({
    reducer:{
        chart:chartReducer,
    }
})