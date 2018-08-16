export const intToCurrencyString = value => {
  return value
    ? "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "";
};

export const currencyStringToInt = value => {
  return value ? parseInt(value.replace(/[,\$]|/g, "")) : "";
};

export const stringToNumber = value => {
  return value && parseInt(value) ? parseInt(value) : null;
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
    cell: v => intToCurrencyString(parseInt(v))
  },
  monthlyPayment: {
    header: "Monthly Payment",
    cell: v => intToCurrencyString(parseInt(v))
  },
  apr: {
    header: "APR",
    cell: v => percentToString(v)
  }
};
