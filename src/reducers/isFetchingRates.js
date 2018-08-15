const isFetchingRates = (state = false, action) => {
  switch (action.type) {
    case "REQUEST_RATES":
      return true

    case "RECEIVE_RATES":
      return false

    default:
      return state;
  }
}

export default isFetchingRates;
