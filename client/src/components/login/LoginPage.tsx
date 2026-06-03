import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import LoginButton from "./LoginButton";

async function getAccessToken() {
  const request = await fetch("/path-to-fastapi", {
    method: "POST",
  });
  const accessToken = await request.json();
  console.log(accessToken);
}

export default function LoginPage() {
  const [authCode, setAuthCode] = useSearchParams();
  useEffect(() => {
    if (authCode.get("code") !== null) {
      getAccessToken();
    }
  }, []);

  return (
    <>
      <LoginButton />
    </>
  );
}
