export const intToCurrencyString = (value) => {
  return value ? ("$" + (value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : "";
}

export const currencyStringToInt = (value) => {
  return value ? parseInt(value.replace(/[,\$]/g, "")) : "";
}

export const stringToNumber = (value) => {
  return value && parseInt(value) ? parseInt(value) : null;
}
