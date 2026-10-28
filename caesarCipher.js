function shiftLetter(letter, shift) {
  if (!letter.match(/[a-z]/i)) return letter;

  const code = letter.charCodeAt(0);
  let base;

  if (code >= 97) {
    base = 97;
  } else {
    base = 65;
  }

  const position = code - base;

  const newPosition = (((position + shift) % 26) + 26) % 26;

  return String.fromCharCode(newPosition + base);
}

export function caesarCipher(text, shift) {
  return text
    .split("")
    .map((letter) => shiftLetter(letter, shift))
    .join("");
}
