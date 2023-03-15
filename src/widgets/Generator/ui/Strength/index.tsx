import React, { FC } from "react";
import { getStrengthDescription } from "@/widgets/Generator/utils/getStrengthDescription";

interface Props {
  current: number;
}

const values = [1, 2, 3, 4];

export const Strength: FC<Props> = ({ current }) => {
  return (
    <div className="bg-zinc-900 h-16 flex justify-between items-center p-4">
      <h3 className="uppercase text-xl text-zinc-500">Strength</h3>
      <div className="flex items-center gap-4">
        <span className="uppercase text-2xl">
          {getStrengthDescription(Math.floor(current))}
        </span>
        <div className="flex gap-2">
          {values.map((value) => (
            <div
              key={value}
              className={`w-1 h-4 ring-white ring-2 ${
                current >= value ? "bg-green-300 ring-green-300" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
