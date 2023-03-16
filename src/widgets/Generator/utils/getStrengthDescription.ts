export const getStrengthDescription = (index: number) => {
  if (index >= 4) {
    return "Insane";
  } else if (index >= 3) {
    return "Hard";
  } else if (index >= 2) {
    return "Medium";
  } else if (index >= 1) {
    return "Easy";
  }
};
