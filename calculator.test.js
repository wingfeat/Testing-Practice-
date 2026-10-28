import { calculator } from "./calculator.js";

describe("calculator", () => {
  test("additionne deux nombres", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("additionne des nombres à virgule", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test("multiplie deux nombres", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test("soustrait deux nombres", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });
  test("divise deux nombres", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  test("divise par 0 renvoie une erreur", () => {
    expect(() => calculator.divide(10, 0)).toThrow(Error);
  });
});
