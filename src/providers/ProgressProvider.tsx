"use client";

import { ProgressProvider as BProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";

type ProgressProviderProps = {
  children: ReactNode;
};

const ProgressProvider = ({ children }: ProgressProviderProps) => {
  return (
    <BProgressProvider
      height="4px"
      color="#5E165B"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </BProgressProvider>
  );
};

export default ProgressProvider;
