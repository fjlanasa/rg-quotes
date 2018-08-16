import React from "react";
import RateQuoteRow from "./../RateQuoteRow/";
import { tableCellFormatters } from "./../../utils/formatters";

export default ({ rates }) => {
  let keys = Object.keys(rates[0]);
  return (
    <table className="rate-quotes">
      <tr>
        {keys.map((k, i) => {
          return <th>{tableCellFormatters[k].header}</th>;
        })}
      </tr>
      <tbody>
        {rates.map((r, i) => {
          return <RateQuoteRow rate={r} key={i} />;
        })}
      </tbody>
    </table>
  );
};
