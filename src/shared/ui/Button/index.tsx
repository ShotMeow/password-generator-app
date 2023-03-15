import React, { FC, MouseEventHandler, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <motion.button
      className="bg-green-300 hover:bg-inherit hover:text-green-300 hover:ring-2 ring-inset hover:ring-green-300 text-black uppercase text-lg font-bold w-full py-3 flex items-center justify-center gap-4"
      onClick={onClick}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.button>
  );
};
