import {combineReducers} from "redux";
import auth from "./reducers/auth";

const googleBooks = combineReducers({
    auth
})

export default googleBooks
