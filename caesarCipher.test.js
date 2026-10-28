import { caesarCipher } from "./caesarCipher.js";

describe("ceasarCipher", () => {
  test("renvoie les lettres avec un décalage", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });
  test("renvoie l'alphabet de 0", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("sensitive à la capitalisation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("gestion d'une phrase", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("passe de Z à A en majuscules", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });
  test("ne modifie pas les chiffres", () => {
    expect(caesarCipher("abc123", 3)).toBe("def123");
  });
  test("passe a à Z", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
  });
});
