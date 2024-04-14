import React from "react";
import { Theme } from "./theme";

type ReactContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext(Theme);

export const ThemeContextProvider = ({
  children,
}: ReactContextProviderProps) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};
