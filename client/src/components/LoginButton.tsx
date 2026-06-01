const stravaAuthUri = "https://www.strava.com/oauth/authorize";
//https://www.strava.com/oauth/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/auth&approval_prompt=force&scope=read,activity:read,activity:read_all

export default function LoginButton() {
  const handleClick = () => {
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID,
      response_type: "code",
      redirect_uri: "http://localhost:3000/auth",
      approval_prompt: "force",
      scope: "read,activity:read,activity:read_all",
    });
    window.location.href = `${stravaAuthUri}?${params}`;
  };
  return <button onClick={handleClick}>Login with Strava</button>;
}
