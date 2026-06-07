import React, { createContext, useState } from "react";
// I might later need to create one context for everything and include token in it
type TokenContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const TokenContext = createContext<TokenContextType>({
  token: "",
  setToken: () => {},
});

type Props = {
  children?: React.ReactNode;
};

export function TokenProvider({ children }: Props) {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
