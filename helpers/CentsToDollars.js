export default function centsToDollars (amt = 0, decimals = 2) {
  let value = amt;

  if (typeof amt === 'string') {
    value = parseInt(value);
  }

  if (value === 0) {
    return value;
  }

  if (decimals === 0) {
    return (value / 100);
  }

  return (value / 100).toFixed(decimals);
}
