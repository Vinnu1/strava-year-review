import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/tokenContext";

const fetchActivities = async (token: string): Promise<void> => {
  const response = await fetch("http://localhost:8000/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  });
  const activityData = await response.json();
  console.log(activityData);
};

export default function YearReview() {
  const { token } = useContext(TokenContext);
  useEffect(() => {
    fetchActivities(token);
  }, []);
  return <>Year Review Page!</>;
}
