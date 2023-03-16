import {
  lowercaseLetters,
  numbers,
  symbols,
  uppercaseLetters,
} from "./symbols";

interface PasswordGenerateTypes {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
}

export const passwordGenerate = ({
  length,
  lowercase,
  uppercase,
  withNumbers,
  withSymbols,
}: PasswordGenerateTypes): string => {
  let usableSymbols = "";

  if (lowercase) usableSymbols += lowercaseLetters;
  if (uppercase) usableSymbols += uppercaseLetters;
  if (withNumbers) usableSymbols += numbers;
  if (withSymbols) usableSymbols += symbols;

  let result = "";

  for (let i = 0; i < length; i++) {
    const randInt = Math.round(Math.random() * usableSymbols.length);
    result += usableSymbols.substring(randInt, randInt + 1);
  }

  return result;
};
