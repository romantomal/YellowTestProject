import {combineReducers} from "redux";
import jogsReducer from "./jogs";
import menuReducer from "./menu";

export default combineReducers({
    jogs: jogsReducer,
    menu: menuReducer
})
