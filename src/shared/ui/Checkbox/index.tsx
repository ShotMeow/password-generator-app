import React, { FC, PropsWithChildren } from "react";

import { CheckIcon } from "../Icons/Check";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox: FC<PropsWithChildren<Props>> = ({
  isActive,
  setIsActive,
  children,
}) => {
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      type="button"
      className="group flex items-center gap-4"
    >
      <div
        className={`w-5 h-5 shrink-0 border-2 rounded-sm transition-all flex items-center justify-center group-hover:border-green-300 ${
          isActive
            ? "bg-green-300 border-green-300"
            : "bg-zinc-800 border-white"
        }`}
      >
        <span className={`${!isActive ? "hidden" : "text-black"}`}>
          <CheckIcon />
        </span>
      </div>
      <span className="text-lg text-left">{children}</span>
    </button>
  );
};
