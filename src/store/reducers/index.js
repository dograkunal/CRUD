import { combineReducers } from "redux";
import { registerReducer } from "../../views/register/RegisterReducer";
import { loginReducer } from "../../views/login/LoginReducer";
import { TODoReducer } from "../../views/dashboard/to-do/reducer/todoReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  todo: TODoReducer,
});

export default rootReducer;
