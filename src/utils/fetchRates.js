const timeout = ms => new Promise(res => setTimeout(res, ms));

const rateQuotesEndpoint = "https://​ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes";
const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': `RG-AUTH ${process.env.REACT_APP_RG_AUTH_KEY}`
})

export const postRateRequest = (values) => {
  return fetch(rateQuotesEndpoint, {
    method: "POST",
  	body: JSON.stringify(values),
    headers: headers
  }).then((res) => {
    return res.json();
  }).then((data) => {
    if (data.requestId) {
      return Promise.resolve(data.requestId);
    } else {
      return Promise.reject();
    }
  })
}

export const handleGetRateRequestResponse = async (data, requestId) => {
  if (data.done) {
    return Promise.resolve(data.rateQuotes)
  } else {
    await timeout(1000);
    return getRateRequest(requestId);
  }
}

export const getRateRequest = (requestId) => {
  return fetch(`${rateQuotesEndpoint}?requestId=${requestId}`, {
    headers: headers
  }).then((res) => {
    return res.json();
  }).then((data) => {
    return handleGetRateRequestResponse(data, requestId);
  });
}

const fetchRates = (values) => {
  return postRateRequest(values).then((requestId) => {
    return getRateRequest(requestId);
  }).then((rateQuotes) => {
    return rateQuotes;
  }).catch((e) => {
    return [];
  })
}

export default fetchRates;
