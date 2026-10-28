export function analyzeArray(array) {
  if (array === undefined) return array;

  const sum = array.reduce((total, number) => total + number, 0);

  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
