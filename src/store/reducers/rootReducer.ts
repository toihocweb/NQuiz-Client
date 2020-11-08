import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export default reducer;
