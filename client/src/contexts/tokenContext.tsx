import { createContext, useState } from "react";

const TokenContext = createContext();

export default function TokenProvider() {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {childen}
    </TokenContext.Provider>
  );
}
