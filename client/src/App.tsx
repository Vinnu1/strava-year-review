import { useState } from "react";
import LoginButton from "./components/LoginButton";

function App() {
  const [accessToken, setAccessToken] = useState("");

  return (
    <>
      <LoginButton />
    </>
  );
}

export default App;
