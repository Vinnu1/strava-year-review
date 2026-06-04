import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import LoginButton from "./LoginButton";

async function getAccessToken(code: string) {
  const request = await fetch("http://localhost:8000/authorize", {
    method: "POST",
    body: JSON.stringify({ code: code }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const accessToken = await request.json();
  console.log(accessToken);
}

export default function LoginPage() {
  const [authCode, setAuthCode] = useSearchParams();
  useEffect(() => {
    const code = authCode.get("code");
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
