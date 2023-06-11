import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducer/cartReducer";

const rootred=combineReducers({
    cartReducer
}
   
)
const store=createStore(
    rootred
)
export default store