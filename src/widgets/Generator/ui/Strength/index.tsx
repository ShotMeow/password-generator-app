import React, { FC } from "react";

import { getStrengthDescription } from "../../utils/getStrengthDescription";
import { getStrengthColorClasses } from "../../utils/getStrengthColorClasses";

interface Props {
  current: number;
}

const values = [1, 2, 3, 4];

export const Strength: FC<Props> = ({ current }) => {
  return (
    <div className="bg-zinc-900 flex flex-col md:flex-row justify-between items-center p-4 gap-4">
      <h3 className="uppercase text-xl text-zinc-500">Strength</h3>
      <div className="flex items-center gap-4">
        {getStrengthDescription(Math.floor(current)) && (
          <span className="uppercase text-xl">
            {getStrengthDescription(Math.floor(current))}
          </span>
        )}
        <div className="flex gap-2">
          {values.map((value) => (
            <div
              key={value}
              className={`w-1.5 h-6 ring-2 ${getStrengthColorClasses(
                current,
                value
              )}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
