const rates = (state = [], action) => {
  switch (action.type) {
    case "REQUEST_RATES":
      return []

    case "RECEIVE_RATES":
      return action.rates

    default:
      return state;
  }
}

export default rates;
