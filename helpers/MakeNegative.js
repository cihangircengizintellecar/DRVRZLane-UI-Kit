export default function makeNegative (val, makeNegative) {
  if (makeNegative) {
    return 0 - val;
  }
  return val;
}
