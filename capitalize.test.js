import { capitalize } from "./capitalize";

test("met la première lettre en majuscule", () => {
  expect(capitalize("bonjour")).toBe("Bonjour");
});
test("garde la première lettre en majuscule", () => {
  expect(capitalize("Bonjour")).toBe("Bonjour");
});
test("met la première lettre d'une phrase en majuscule", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
test("ne modifie pas un texte qui commence par un espace » serait juste", () => {
  expect(capitalize(" bonjour")).toBe(" bonjour");
});
test("renvoie une chaîne vide pour un texte vide", () => {
  expect(capitalize("")).toBe("");
});
