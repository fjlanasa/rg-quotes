import React from "react";
import { shallow } from "enzyme";
import InputField from "./";

describe("InputField", () => {
  let input,
    value,
    name,
    touched,
    pristine,
    error,
    meta,
    subject = null;
  beforeEach(() => {
    touched = true;
    pristine = false;
    value = "value";
    name = "name";
    error = "Required";
  });
  const buildElement = () => {
    let input = { name: name, value: value },
      meta = { touched: touched, error: error, pristine: pristine },
      props = {
        input,
        meta
      };
    return shallow(<InputField {...props} />);
  };

  it("should return no error if error is null", () => {
    error = null;
    let subject = buildElement();
    let errorField = subject.find(".error");
    expect(errorField.exists()).toEqual(false);
  });

  it("should return no error if field is not touched", () => {
    touched = false;
    let subject = buildElement();
    let errorField = subject.find(".error");
    expect(errorField.exists()).toEqual(false);
  });

  it("should return no error if field is pristine", () => {
    pristine = true;
    let subject = buildElement();
    let errorField = subject.find(".error");
    expect(errorField.exists()).toEqual(false);
  });

  it("should return no error if error is null", () => {
    error = null;
    let subject = buildElement();
    let errorField = subject.find(".error");
    expect(errorField.exists()).toEqual(false);
  });

  it("should return no error if field is not touched", () => {
    touched = false;
    let subject = buildElement();
    let errorField = subject.find(".error");
    expect(errorField.exists()).toEqual(false);
  });

  it("should return error if error exists and field is touched and not pristine", () => {
    let subject = buildElement();
    let errorField = subject.find(".error");
    expect(errorField.exists()).toEqual(true);
    expect(errorField.text()).toEqual(error);
  });
});
