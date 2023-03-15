import React, { FC, useEffect } from "react";
import { CheckIcon } from "../Icons/Check";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface Props {
  type?: "error" | "notification";
  text: string;
  onShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Notification: FC<Props> = ({
  type = "notification",
  text,
  onShown,
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onShown(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return createPortal(
    <motion.div
      className="fixed bg-zinc-800 text-white left-1/2 -translate-x-1/2 rounded-md py-3 px-4 flex gap-2 shadow-2xl"
      initial={{ top: -200 }}
      animate={{ top: 10 }}
      exit={{ top: -200 }}
      style={{ width: "100%", maxWidth: "540px" }}
    >
      {type === "notification" ? (
        <div className="w-6 h-6 flex shrink-0 items-center justify-center bg-green-300 rounded-full text-black">
          <CheckIcon />
        </div>
      ) : (
        <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-red-300 rounded-full text-black font-bold">
          !
        </div>
      )}
      <span>{text}</span>
    </motion.div>,
    document.getElementById("overlay") as HTMLElement
  );
};
