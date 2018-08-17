import React from "react";
import { shallow } from "enzyme";
import RateQuoteCell from "./";

describe("RateQuoteCell", () => {
  let label = "monthlyPayment",
    formatter = f => f,
    value = 2052.2,
    mock = jest.fn(),
    tableCellFormatters = {
      [label]: {
        cell: jest.fn()
      }
    };
  let buildSubject = () => {
    return shallow(<RateQuoteCell label={label} value={value} />);
  };

  it("renders a td", () => {
    expect(buildSubject().name()).toEqual("td");
  });
});
