import rates from "./rates";
import { REQUEST_RATES, RECEIVE_RATES } from "./../constants/actionTypes";

describe("rates reducer", () => {
  it("should handle initial state", () => {
    expect(rates(undefined, {})).toEqual(null);
  });

  it("should handle REQUEST_RATES", () => {
    expect(rates([], { type: REQUEST_RATES })).toEqual([]);
  });

  it("should handle RECEIVE_RATES", () => {
    expect(
      rates([], {
        type: RECEIVE_RATES,
        rates: [{ name: "rate1" }]
      })
    ).toEqual([{ name: "rate1" }]);
  });
});
