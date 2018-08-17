export const intToCurrencyString = value => {
  return value
    ? "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "";
};

export const floatToCurrencyString = value => {
  return value
    ? "$" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    : "";
};

export const currencyStringToInt = value => {
  return value ? parseInt(value.replace(/[,$]|/g, ""), 10) : "";
};

export const stringToNumber = value => {
  return value && parseInt(value, 10) ? parseInt(value, 10) : null;
};

export const percentToString = value => {
  return `${value.toFixed(3)}%`;
};

export const tableCellFormatters = {
  lenderName: {
    header: "Lender",
    cell: v => v
  },
  loanType: {
    header: "Product",
    cell: v => v
  },
  interestRate: {
    header: "Rate",
    cell: v => percentToString(v)
  },
  closingCosts: {
    header: "Closing Costs",
    cell: v => floatToCurrencyString(v)
  },
  monthlyPayment: {
    header: "Monthly Payment",
    cell: v => floatToCurrencyString(v)
  },
  apr: {
    header: "APR",
    cell: v => percentToString(v)
  }
};
