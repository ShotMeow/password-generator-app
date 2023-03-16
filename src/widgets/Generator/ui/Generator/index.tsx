import React, { FC, useState } from "react";

import { GeneratorField } from "../GeneratorField";
import { GeneratorKeyboard } from "../GeneratorKeyboard";

export const Generator: FC = () => {
  const [passwordValue, setPasswordValue] = useState<string>("");

  return (
    <div
      className="text-center flex flex-col items-center gap-4 mx-4 sm:mx-0"
      style={{ width: "100%", maxWidth: "540px" }}
    >
      <h1 className="text-2xl font-medium text-neutral-400">
        Password Generator
      </h1>
      <div className="space-y-4 w-full">
        <GeneratorField inputValue={passwordValue} />
        <GeneratorKeyboard setPasswordValue={setPasswordValue} />
      </div>
    </div>
  );
};
