const BASIC_URL_REGEX = /(?!>)(https?:\/\/[^\s]*)(?!<\/a>)/g;

export default function parseURLs (text) {
  let newText = text;

  let match = BASIC_URL_REGEX.exec(newText);
  const matches = [];
  while (match !== null) {
    matches.push(match[0]);
    BASIC_URL_REGEX.lastIndex = match.index + 1;

    match = BASIC_URL_REGEX.exec(newText);
  }

  BASIC_URL_REGEX.lastIndex = 0;

  if (matches.length > 0) {
    matches.forEach((m) => {
      newText = newText.replace(m, `<a href="${m}" target="_blank">${m}</a>`);
    });
  }

  return newText;
}
