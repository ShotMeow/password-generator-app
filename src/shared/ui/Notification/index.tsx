import React, { FC } from "react";
import { CheckIcon } from "../Icons/Check";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

export const Notification: FC<Props> = ({ text }) => {
  return createPortal(
    <motion.div
      className="fixed bg-zinc-800 text-white left-1/2 -translate-x-1/2 rounded-md py-3 px-4 flex gap-2"
      initial={{ top: -200 }}
      animate={{ top: 10 }}
      exit={{ top: -200 }}
    >
      <div className="bg-green-300 rounded-full text-black">
        <CheckIcon />
      </div>
      <span>{text}</span>
    </motion.div>,
    document.getElementById("overlay") as HTMLElement
  );
};
