export const getStrengthColorClasses = (current: number, value: number) => {
  console.log(current);
  if (current >= value) {
    if (current >= 4) {
      return "bg-red-500 ring-red-500";
    } else if (current >= 3) {
      return "bg-red-300 ring-red-300";
    } else if (current >= 2) {
      return "bg-orange-300 ring-orange-300";
    } else {
      return "bg-green-300 ring-green-300";
    }
  } else {
    return "ring-white";
  }
};
