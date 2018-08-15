import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import isFetchingRates from "./isFetchingRates";

export default combineReducers({
  isFetchingRates,
  form: reduxFormReducer
})
