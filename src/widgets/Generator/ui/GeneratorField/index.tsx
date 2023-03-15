import React, { FC, useState } from "react";
import { CopyIcon, Field, Notification } from "@/shared/ui";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  inputValue: string;
}

export const GeneratorField: FC<Props> = ({ inputValue }) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const onCopyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(inputValue).then(() => {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    });
  };

  return (
    <>
      <div className="relative">
        <Field className="cursor-pointer" value={inputValue} disabled />
        <motion.button
          onClick={(event) => onCopyToClipboard(event)}
          className="absolute right-5 top-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CopyIcon />
        </motion.button>
      </div>
      <AnimatePresence>
        {showNotification && (
          <Notification text="Пароль скопирован в буфер обмена" />
        )}
      </AnimatePresence>
    </>
  );
};
