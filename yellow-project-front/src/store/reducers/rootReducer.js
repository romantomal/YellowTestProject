import {combineReducers} from "redux";
import jogsReducer from "./jogs";
import menuReducer from "./menu";
import mainReducer from "./main";

export default combineReducers({
    jogs: jogsReducer,
    menu: menuReducer,
    main: mainReducer
})
