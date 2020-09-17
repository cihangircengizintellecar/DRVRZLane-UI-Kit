export default function dollarsToCents (amt) {
  const value = typeof amt === 'string' ? parseFloat(amt) : amt;

  return Math.floor(100 * value);
}
