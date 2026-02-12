"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

type ProgressProviderProps = {
  children: ReactNode;
};

const ProgressProvider = ({ children }: ProgressProviderProps) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#5E165B"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProvider;
