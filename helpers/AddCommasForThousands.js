export default function addCommasForThousands (num, withDecimal = false) {
  if (withDecimal) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const formattedVal = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedVal;
}
