import React, { FC, useEffect, useState } from "react";
import { Checkbox, Range, ArrowIcon } from "@/shared/ui";
import { Button } from "@/shared/ui/Button";
import { passwordGenerate } from "@/widgets/Generator/utils/passwordGenerate";
import { Strength } from "../Strength";
import { getStrength } from "@/widgets/Generator/utils/getStrength";

interface Props {
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
}

export const GeneratorKeyboard: FC<Props> = ({ setPasswordValue }) => {
  const [passwordLength, setPasswordLength] = useState<number[]>([1]);

  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const [strength, setStrength] = useState<number>(0);

  useEffect(() => {
    setStrength(
      getStrength(
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
      )
    );
  }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleGeneratePassword = () => {
    setPasswordValue(
      passwordGenerate({
        length: passwordLength[0],
        uppercase: includeUppercase,
        lowercase: includeLowercase,
        withNumbers: includeNumbers,
        withSymbols: includeSymbols,
      })
    );
  };

  return (
    <div className="p-6 bg-zinc-800">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-lg">Character Length</p>
            <span className="text-3xl text-green-300 font-bold">
              {passwordLength[0]}
            </span>
          </div>
          <Range
            min={1}
            max={24}
            onChangeRange={setPasswordLength}
            values={passwordLength}
          />
        </div>
        <div className="space-y-4">
          <Checkbox
            isActive={includeUppercase}
            setIsActive={setIncludeUppercase}
          >
            Include Uppercase Letters
          </Checkbox>
          <Checkbox
            isActive={includeLowercase}
            setIsActive={setIncludeLowercase}
          >
            Include Lowercase Letters
          </Checkbox>
          <Checkbox isActive={includeNumbers} setIsActive={setIncludeNumbers}>
            Include Numbers
          </Checkbox>
          <Checkbox isActive={includeSymbols} setIsActive={setIncludeSymbols}>
            Include Symbols
          </Checkbox>
        </div>
        <Strength current={strength} />
        <Button onClick={() => handleGeneratePassword()}>
          Generate <ArrowIcon />
        </Button>
      </div>
    </div>
  );
};
