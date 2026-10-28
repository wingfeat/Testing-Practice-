import { reverseString } from "./reverseString.js";

test("inverse les lettres d'un mot", () => {
  expect(reverseString("bonjour")).toBe("ruojnob");
});
test("inverse les lettres d'une phrase", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
test("palyndrome est indentique", () => {
  expect(reverseString("kayak")).toBe("kayak");
});
test("renvoie une chaîne vide pour un texte vide", () => {
  expect(reverseString("")).toBe("");
});
