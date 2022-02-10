import { createContext, useState } from "react";

export const LoadContext = createContext();

export const LoadProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    document.body.classList.add("loading");
  } else {
    document.body.classList.remove("loading");
  }

  return (
    <LoadContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadContext.Provider>
  );
};
