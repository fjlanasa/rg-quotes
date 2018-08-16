export const validatePresence = value => {
  if (value === null || value === undefined) {
    return "A value is required";
  }
};

export const validateIsNumber = value => {
  if (typeof value !== "number") {
    return "Value must be a number";
  }
};

export const validateEnum = (value, validValues) => {
  if (validValues.indexOf(value) === -1) {
    return "Value is not valid";
  }
};

export const validateLoanSize = value => {
  return validatePresence(value) || validateIsNumber(value);
};

export const validateCreditScore = value => {
  let error = validatePresence(value) || validateIsNumber(value);
  if (!error && (value < 300 || value > 800)) {
    error = "Credit score must be between 300 and 800";
  }
  return error;
};

export const validateOccupancy = value => {
  return (
    validatePresence(value) ||
    validateEnum(value, ["Primary", "Secondary", "Investment"])
  );
};

export const validatePropertyType = value => {
  return (
    validatePresence(value) ||
    validateEnum(value, ["SingleFamily", "Condo", "Townhouse", "MultiFamily"])
  );
};

export const validateForm = values => {
  let loanSizeError = validateLoanSize(values.loanSize),
    creditScoreError = validateCreditScore(values.creditScore),
    occupancyError = validateOccupancy(values.occupancy),
    propertyTypeError = validatePropertyType(values.propertyType),
    errors = {};

  if (loanSizeError) errors.loanSize = loanSizeError;
  if (creditScoreError) errors.creditScore = creditScoreError;
  if (occupancyError) errors.occupancy = occupancyError;
  if (propertyTypeError) errors.propertyType = propertyTypeError;
  return errors;
};
