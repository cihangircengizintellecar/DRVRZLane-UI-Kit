export default function formatCurrency (num, noDollar = false) {
  let dollarSign = noDollar ? '' : '$';
  let formattedVal;

  if (formattedVal !== '') {
    formattedVal = parseFloat(num).toFixed(2);

    // if num has (-) sign, move it to the outside of dollar sign, e.g. -$13,495 instead of $-13,495
    if (formattedVal.indexOf('-') > -1) {
      formattedVal = formattedVal.replace('-', '');
      dollarSign = '-$';
    }

    formattedVal = formattedVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    formattedVal = dollarSign.concat(formattedVal);
  } else {
    formattedVal = '-';
  }

  return formattedVal;
}
