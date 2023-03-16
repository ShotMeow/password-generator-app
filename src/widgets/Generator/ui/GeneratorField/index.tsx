import React, { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CopyIcon, Field, Notification } from "@/shared/ui";

interface Props {
  inputValue: string;
}

export const GeneratorField: FC<Props> = ({ inputValue }) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const onCopyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(inputValue).then(() => {
      setShowNotification(true);
    });
  };

  return (
    <>
      <div className="relative">
        <Field className="cursor-pointer pr-16" value={inputValue} disabled />
        <motion.button
          onClick={(event) => onCopyToClipboard(event)}
          className="absolute right-5 top-5 text-green-300 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CopyIcon />
        </motion.button>
      </div>
      <AnimatePresence>
        {showNotification && (
          <Notification
            onShown={setShowNotification}
            text="Пароль скопирован в буфер обмена"
          />
        )}
      </AnimatePresence>
    </>
  );
};
