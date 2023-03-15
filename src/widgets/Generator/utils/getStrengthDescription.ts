export const getStrengthDescription = (index: number) => {
  switch (index) {
    case 1:
      return "Easy";
    case 2:
      return "Medium";
    case 3:
      return "Hard";
    case 4:
      return "Insane";
    default:
      break;
  }
};
