import * as inputFormatters from "./inputFormatters";

describe("inputFormatters", () => {
  const {
    intToCurrencyString,
    currencyStringToInt,
    stringToNumber
  } = inputFormatters;
  describe("intToCurrencyString", () => {
    it("should return empty string if value is null", () => {
      expect(intToCurrencyString(null)).toEqual("");
    });

    it("should return string if value is number", () => {
      expect(typeof intToCurrencyString(4)).toEqual("string");
    });

    it("should prepend '$' if value is number", () => {
      expect(intToCurrencyString(5)).toEqual("$5");
    });

    it("should add ',' as delimiter", () => {
      expect(intToCurrencyString(5555)).toEqual("$5,555");

      expect(intToCurrencyString(55555555)).toEqual("$55,555,555");
    });
  });

  describe("currencyStringToInt", () => {
    it("should return empty string if value is null", () => {
      expect(currencyStringToInt(null)).toEqual("");
    });

    it("should return empty string if value is 0", () => {
      expect(currencyStringToInt(0)).toEqual("");
    });

    it("should return number if value is currency string", () => {
      expect(typeof currencyStringToInt("$5")).toEqual("number");
    });

    it("should remove '$' and ',' from string", () => {
      expect(currencyStringToInt("$5,432")).toEqual(5432);
    });
  });

  describe("stringToNumber", () => {
    it("should return null if value is null", () => {
      expect(stringToNumber(null)).toEqual(null);
    });

    it("should return null if value is not a number string (NaN)", () => {
      expect(stringToNumber("a")).toEqual(null);
    });

    it("should return number if value is a number string", () => {
      expect(stringToNumber("123")).toEqual(123);
    });
  });
});
