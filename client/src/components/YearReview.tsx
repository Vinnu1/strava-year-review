import { useEffect, useState } from "react"; //useContext,
// import UserContext from "../contexts/userContext";
import ActivityCard from "./ActivityCard";

const fetchActivities = async (signal?: AbortSignal) => {
  const response = await fetch("http://localhost:8000/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   token: token,
    // }),
    credentials: "include",
    signal: signal,
  });
  const userData = await response.json();
  console.log(userData);
  return userData;
};

const testData = {
  sports: {
    total: 2050,
    chart: [
      // in km
      { sport: "Walk", km: 651 },
      { sport: "Ride", km: 2010 },
      { sport: "Run", km: 1000 },
      { sport: "Hike", km: 50 },
      { sport: "Swim", km: 40 },
    ],
  },
  time: {
    // in hr
    total: 317,
    chart: [
      { month: "JAN", hrs: 25 },
      { month: "FEB", hrs: 29 },
      { month: "MAR", hrs: 14 },
      { month: "APR", hrs: 19 },
      { month: "MAY", hrs: 22 },
      { month: "JUN", hrs: 20 },
      { month: "JUL", hrs: 18 },
      { month: "AUG", hrs: 30 },
      { month: "SEP", hrs: 25 },
      { month: "OCT", hrs: 40 },
      { month: "NOV", hrs: 35 },
      { month: "DEC", hrs: 40 },
    ],
  },
  days: {
    // active days
    total: 317,
    chart: [
      { month: "JAN", days: 25 },
      { month: "FEB", days: 29 },
      { month: "MAR", days: 14 },
      { month: "APR", days: 19 },
      { month: "MAY", days: 22 },
      { month: "JUN", days: 20 },
      { month: "JUL", days: 18 },
      { month: "AUG", days: 30 },
      { month: "SEP", days: 25 },
      { month: "OCT", days: 40 },
      { month: "NOV", days: 35 },
      { month: "DEC", days: 40 },
    ],
  },
  streak: 40, // most continuous days
  locations: {
    chart: [
      // top cities
      { location: "Indore", activities: 200 },
      { location: "Delhi", activities: 50 },
      { location: "Khajuraho", activities: 20 },
      { location: "Gurugram", activities: 27 },
      { location: "Noida", activities: 20 },
    ],
  },
};

export default function YearReview() {
  const [userData, setUserData] = useState(testData);
  //const { user } = useContext(UserContext);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   fetchActivities(controller.signal).then((data) => setUserData(data));
  //   return () => controller.abort();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <ActivityCard
        title="Top Sports"
        data={userData.sports}
        datakey={{ x: "km", y: "sport" }}
      />
      <ActivityCard
        title="Time Spent"
        data={userData.time}
        datakey={{ x: "hrs", y: "month" }}
      />
      <ActivityCard
        title="Days in Month"
        data={userData.days}
        datakey={{ x: "days", y: "month" }}
      />
      <ActivityCard
        title="Top Locations"
        data={userData.locations}
        datakey={{ x: "activities", y: "location" }}
      />
    </div>
  );
}
