import { REQUEST_RATES, RECEIVE_RATES } from "./../constants/actionTypes";
import fetchRates from "./../utils/fetchRates";

export const requestRates = () => {
  return {
    type: REQUEST_RATES
  };
};

export const receiveRates = rates => {
  return {
    type: RECEIVE_RATES,
    rates: rates
  };
};

export const fetchRateQuotes = queryParameters => {
  return dispatch => {
    dispatch(requestRates());
    return fetchRates(queryParameters).then(rates => {
      return dispatch(receiveRates(rates));
    });
  };
};
