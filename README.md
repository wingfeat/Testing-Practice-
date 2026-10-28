# Testing Practice

Small JavaScript functions written with **Test-Driven Development**, using [Jest](https://jestjs.io/). An exercise from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice) curriculum (Full Stack JavaScript path).

## The functions

| Function | What it does | Example |
|---|---|---|
| `capitalize(text)` | Capitalizes the first character | `"hello"` → `"Hello"` |
| `reverseString(text)` | Reverses a string | `"hello"` → `"olleh"` |
| `calculator` | An object with `add`, `subtract`, `multiply` and `divide` | `calculator.add(2, 3)` → `5` |
| `caesarCipher(text, shift)` | Shifts each letter by `shift` places in the alphabet | `"Hello, World!", 3` → `"Khoor, Zruog!"` |
| `analyzeArray(array)` | Returns the average, min, max and length of an array of numbers | `[1, 8, 3, 4, 2, 6]` → `{ average: 4, min: 1, max: 8, length: 6 }` |

### Details worth knowing

- `calculator.divide` throws an error when dividing by zero, instead of returning a misleading result.
- `caesarCipher` wraps from `z` to `a`, keeps the original letter case, leaves punctuation, spaces and digits unchanged, and also accepts negative shifts.

## What I learned

- **The TDD cycle**: write a failing test first (red), write just enough code to make it pass (green), then improve the code (refactor)
- **Jest matchers**: `toBe` for primitive values, `toEqual` for objects, `toBeCloseTo` for decimal numbers, and `toThrow` (which needs a function wrapper) for errors
- **Testing edge cases**: empty strings, single values, negative numbers, wrapping around the alphabet, punctuation
- **A passing test only proves what it checks**: a test without a matcher always passes, and a test can share the same mistake as the code it tests
- **Working with character codes** (`charCodeAt`, `String.fromCharCode`) and the modulo operator, including its behavior with negative numbers
- **Array methods** such as `reduce`, and the spread syntax with `Math.min` and `Math.max`

## Getting started

```bash
git clone git@github.com:wingfeat/Testing-Practice-.git
cd Testing-Practice-
npm install
npm test
```

Jest uses [Babel](https://babeljs.io/) (`@babel/preset-env`) to support ES module `import` and `export` syntax.
