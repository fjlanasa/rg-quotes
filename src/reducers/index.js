import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import isFetchingRates from "./isFetchingRates";
import rates from "./rates";

export default combineReducers({
  isFetchingRates,
  rates,
  form: reduxFormReducer
});
