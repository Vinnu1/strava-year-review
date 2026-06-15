import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import LoginButton from "./LoginButton";
import TokenContext from "../../contexts/userContext";

async function getAccessToken(code: string) {
  const response = await fetch("http://localhost:8000/authorize", {
    method: "POST",
    body: JSON.stringify({ code: code }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.log("Error, please login again");
    return false;
  }
  const accessToken = await response.json();
  console.log(accessToken);
  return accessToken;
}

export default function LoginPage() {
  const { setToken } = useContext(TokenContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // const nav = () => {
  //   useNavigate("/");
  // };
  useEffect(() => {
    const code = searchParams.get("code");
    if (code !== null) {
      getAccessToken(code).then((result) => {
        if (result) {
          setToken(result);
          navigate("/");
        } else {
          // Ask user to log in again
          setSearchParams("");
        }
      });
    }
  }, []);

  return (
    <>
      <LoginButton />
    </>
  );
}
