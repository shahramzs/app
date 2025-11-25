"use client";
import { createContext, useState, useContext } from "react";

const FileContext = createContext(null);

export function FileProvider({ children }) {
  const [file, setFile] = useState(null);

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFile() {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFile must be used inside <FileProvider>");
  }
  return context;
}
