import { combineReducers } from "@reduxjs/toolkit";
import initialDetailsSlice from "./initialDetailsSlice";

export const appReducers = combineReducers({
initialDetails:    initialDetailsSlice
}) 