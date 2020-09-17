export function arrToStr (arr) {
  return arr.toString().replace(/,/g, ' ');
}

export default function classNames (classes = {}) {
  const clsArr = Object.keys(classes)
    .filter((cls) => classes[cls]);

  return arrToStr(clsArr);
}
