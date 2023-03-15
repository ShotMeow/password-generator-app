import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  value: string;
  disabled?: boolean;
}

export const Field: FC<Props> = ({
  value,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      value={value}
      disabled={disabled}
      className={`p-4 text-3xl bg-zinc-800 w-full ${className}`}
      {...props}
    />
  );
};
