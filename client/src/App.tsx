import { useState } from "react";
import LoginButton from "./components/LoginButton";

function App() {
  const [accessToken, setAccessToken] = useState("");

  return <>{accessToken !== "" ? <h1>Logged In</h1> : <LoginButton />}</>;
}

export default App;
