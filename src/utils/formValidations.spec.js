import * as formValidations from "./formValidations";

describe("formValidations", () => {
  describe("validatePresence", () => {
    it("should return undefined if value is not null or undefined", () => {
      expect(
        formValidations.validatePresence("hello")
      ).toEqual(undefined)
    })

    it("should return message if value is null or undefined", () => {
      expect(
        formValidations.validatePresence(null)
      ).toEqual("A value is required")

      expect(
        formValidations.validatePresence(undefined)
      ).toEqual("A value is required")
    })
  })

  describe("validateIsNumber", () => {
    it("should return undefined if value is number", () => {
      expect(
        formValidations.validateIsNumber(4)
      ).toEqual(undefined)
    })

    it("should return message if value is not type number", () => {
      expect(
        formValidations.validateIsNumber("5")
      ).toEqual("Value must be a number")

      expect(
        formValidations.validateIsNumber(undefined)
      ).toEqual("Value must be a number")
    })
  })

  describe("validateEnum", () => {
    it("should return undefined if value is valid", () => {
      expect(
        formValidations.validateEnum("foo", ["foo", "bar"])
      ).toEqual(undefined)
    })

    it("should return message if value is not valid", () => {
      expect(
        formValidations.validateEnum("foo", ["faa", "bar"])
      ).toEqual("Value is not valid")
    })
  })

  describe("validateLoanSize", () => {
    it("should return undefined if value is number", () => {
      expect(
        formValidations.validateLoanSize(500)
      ).toEqual(undefined)
    })

    it("should return not present message if value is not present", () => {
      expect(
        formValidations.validateLoanSize()
      ).toEqual("A value is required")
    })

    it("should return not number message if value is not type number", () => {
      expect(
        formValidations.validateLoanSize("5238")
      ).toEqual("Value must be a number")
    })
  })

  describe("validateCreditScore", () => {
    it("should return undefined if 300 < value < 800", () => {
      expect(
        formValidations.validateCreditScore(500)
      ).toEqual(undefined)
    })

    it("should return not present message if value is not present", () => {
      expect(
        formValidations.validateCreditScore()
      ).toEqual("A value is required")
    })

    it("should return not number message if value is not type number", () => {
      expect(
        formValidations.validateCreditScore("400")
      ).toEqual("Value must be a number")
    })

    it("should return out of range message if number < 300 || number > 800", () => {
      expect(
        formValidations.validateCreditScore(299)
      ).toEqual("Credit score must be between 300 and 800")
    })
  })

  describe("validateOccupancy", () => {
    it("should return undefined if value is valid", () => {
      expect(
        formValidations.validateOccupancy("Primary")
      ).toEqual(undefined)
    })

    it("should return message if value is not present", () => {
      expect(
        formValidations.validateOccupancy("space ship")
      ).toEqual("Value is not valid")
    })

    it("should return message if value is not valid", () => {
      expect(
        formValidations.validateOccupancy()
      ).toEqual("A value is required")
    })
  })

  describe("validatePropertyType", () => {
    it("should return undefined if value is valid", () => {
      expect(
        formValidations.validatePropertyType("Condo")
      ).toEqual(undefined)
    })

    it("should return message if value is not valid", () => {
      expect(
        formValidations.validatePropertyType()
      ).toEqual("A value is required")
    })

    it("should return message if value is not valid", () => {
      expect(
        formValidations.validatePropertyType("space ship")
      ).toEqual("Value is not valid")
    })
  })

  describe("validateForm", () => {
    it("should return appropriate messages", () => {
      expect(
        formValidations.validateForm({
          loanSize: 700000,
          creditScore: 800,
          occupancy: "Primary",
          propertyType: "Condo"
        })
      ).toEqual({})

      expect(
        formValidations.validateForm({
          loanSize: "700000",
          creditScore: 800,
          occupancy: "Primary",
          propertyType: "space ship"
        })
      ).toEqual({
        loanSize: "Value must be a number",
        creditScore: undefined,
        occupancy: undefined,
        propertyType: "Value is not valid"
      })
    })
  })
})
