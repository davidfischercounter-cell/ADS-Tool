export function calculateBBQ(selectedValues) {
  const priority = {
    N: 1,
    S: 2,
    E: 3,
  };

  let max = 1;

  selectedValues.forEach((value) => {
    if (priority[value] > max) {
      max = priority[value];
    }
  });

  return max;
}
