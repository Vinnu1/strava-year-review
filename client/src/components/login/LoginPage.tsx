import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import LoginButton from "./LoginButton";

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
    return;
  }
  const accessToken = await response.json();
  console.log(accessToken);
}

export default function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const code = searchParams.get("code");
    if (code !== null) {
      getAccessToken(code);
    }
  }, []);

  return (
    <>
      <LoginButton />
    </>
  );
}
