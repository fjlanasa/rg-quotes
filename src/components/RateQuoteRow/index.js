import React from "react";
import RateQuoteCell from "./../RateQuoteCell/";
import "./styles.css";

export default ({ rate }) => {
  let labels = Object.keys(rate);
  return (
    <tr className="row">
      {labels.map((l, i) => {
        return <RateQuoteCell key={i} label={l} value={rate[l]} />;
      })}
    </tr>
  );
};
