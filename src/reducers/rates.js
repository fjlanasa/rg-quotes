import { REQUEST_RATES, RECEIVE_RATES } from "./../constants/actionTypes";

const rates = (state = null, action) => {
  switch (action.type) {
    case REQUEST_RATES:
      return [];

    case RECEIVE_RATES:
      return action.rates;

    default:
      return state;
  }
};

export default rates;
