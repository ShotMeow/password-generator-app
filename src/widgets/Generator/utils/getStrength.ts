export const getStrength = (
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): number => {
  let value = 0;

  if (includeUppercase) value += 1;
  if (includeLowercase) value += 0.5;
  if (includeNumbers) value += 0.5;
  if (includeSymbols) value += 2;

  return value;
};
