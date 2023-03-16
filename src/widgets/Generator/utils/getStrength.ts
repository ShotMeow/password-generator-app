export const getStrength = (
  passwordLength: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): number => {
  let value: number;

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    value = 0;
  } else {
    value = 1;

    value += passwordLength * 0.1;

    if (includeUppercase) value += passwordLength * 0.01;
    if (includeLowercase) value += passwordLength * 0.01;
    if (includeNumbers) value += passwordLength * 0.02;
    if (includeSymbols) value += passwordLength * 0.04;
  }
  return value;
};
