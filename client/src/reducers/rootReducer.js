import { combineReducers } from "redux";

import lookReducer from "./lookReducer";
import sessionReducer from "./sessionReducer";
import sessionErrorReducer from "./sessionErrorReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  sessionError: sessionErrorReducer,
  look: lookReducer,
});

export default rootReducer;
