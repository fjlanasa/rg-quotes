import React from "react";
import RateListings from "./RateListings";
import LoadingIndicator from "./LoadingIndicator";
import NoRatesIndicator from "./NoRatesIndicator";
import "./styles.css";

const RateQuotes = ({ rates, isFetchingRates }) => (
  <div className="rate-quotes-container">
    {isFetchingRates ? (
      <LoadingIndicator />
    ) : rates && rates.length ? (
      <RateListings rates={rates} />
    ) : rates && !rates.length ? (
      <NoRatesIndicator />
    ) : null}
  </div>
);

export default RateQuotes;
