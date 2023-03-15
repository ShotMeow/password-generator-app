import React, { FC } from "react";
import { Generator } from "@/widgets/Generator/ui/Generator";

export const App: FC = () => {
  return (
    <main className="bg-black font-mono text-white h-screen flex items-center justify-center">
      <Generator />
    </main>
  );
};
