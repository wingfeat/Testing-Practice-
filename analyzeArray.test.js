import { analyzeArray } from "./analyzeArray.js";

describe("analyseArray", () => {
  test("renvoi un objet avec son average min max et longueur", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("renvoi un objet avec un tableau d'un seul nombre", () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });
  test("renvoi un objet avec une moyenne à virgule", () => {
    expect(analyzeArray([1, 2])).toEqual({
      average: 1.5,
      min: 1,
      max: 2,
      length: 2,
    });
  });
  test("renvoi un objet avec des valeurs négatives", () => {
    expect(analyzeArray([2, -2])).toEqual({
      average: 0,
      min: -2,
      max: 2,
      length: 2,
    });
  });
  test("renvoi un tableau vide", () => {
    expect(analyzeArray()).toEqual(undefined);
  });
});
