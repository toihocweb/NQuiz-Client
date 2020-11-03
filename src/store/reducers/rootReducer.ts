import { combineReducers } from "redux";
import registerReducer from "./registerReducer";

const reducer = combineReducers({
  register: registerReducer,
});

export default reducer;
