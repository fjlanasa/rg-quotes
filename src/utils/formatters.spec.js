import * as formatters from "./formatters";

describe("formatters", () => {
  const {
    intToCurrencyString,
    floatToCurrencyString,
    currencyStringToInt,
    stringToNumber,
    percentToString
  } = formatters;
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

  describe("floatToCurrencyString", () => {
    it("should return empty string if value is null", () => {
      expect(floatToCurrencyString(null)).toEqual("");
    });

    it("should return string if value is number", () => {
      expect(typeof floatToCurrencyString(4.22)).toEqual("string");
    });

    it("should prepend '$' if value is number", () => {
      expect(floatToCurrencyString(5)).toEqual("$5.00");
    });

    it("should add ',' as delimiter", () => {
      expect(floatToCurrencyString(5555.0)).toEqual("$5,555.00");

      expect(floatToCurrencyString(55555555)).toEqual("$55,555,555.00");
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

  describe("percentToString", () => {
    it("should return string", () => {
      expect(typeof percentToString(4.232)).toEqual("string");
    });

    it("should return the correct format", () => {
      expect(percentToString(4.232)).toEqual("4.232%");
    });
  });
});
