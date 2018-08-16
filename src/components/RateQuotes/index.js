import React from "react";
import RateListings from "./RateListings";
import LoadingIndicator from "./LoadingIndicator";

const RateQuotes = ({ rates, isFetchingRates }) => (
  <div>
    {isFetchingRates ? (
      <LoadingIndicator />
    ) : rates.length ? (
      <RateListings rates={rates} />
    ) : null}
  </div>
);

export default RateQuotes;