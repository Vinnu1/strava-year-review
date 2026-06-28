import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import LoginButton from "./LoginButton";
import UserContext from "../../contexts/userContext";

async function getUser(code: string) {
  const response = await fetch("http://localhost:8000/authorize", {
    method: "POST",
    body: JSON.stringify({ code: code }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    console.log("Error, please login again");
    return false;
  }
  const user = await response.json();
  console.log("User:", user);
  return user;
}

export default function LoginPage() {
  const { addUser } = useContext(UserContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // const nav = () => {
  //   useNavigate("/");
  // };
  useEffect(() => {
    const code = searchParams.get("code");

    if (code !== null) {
      getUser(code).then((result) => {
        if (result) {
          setSearchParams("");
          // addUser(result);
          // navigate("/");
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
