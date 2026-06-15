import { useEffect, useState } from "react"; //useContext,
// import UserContext from "../contexts/userContext";

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
    // in km
    Walk: 651,
    Ride: 2010,
    Run: 1000,
    Hike: 50,
    Swim: 40,
  },
  time: {
    // in hr
    total: 317,
    months: {
      JAN: 25,
      FEB: 29,
      MAR: 14,
      APR: 19,
      MAY: 22,
      JUN: 20,
      JUL: 18,
      AUG: 30,
      SEP: 25,
      OCT: 40,
      NOV: 35,
      DEC: 40,
    },
  },
  days: {
    // active days
    total: 317,
    months: {
      JAN: 25,
      FEB: 29,
      MAR: 14,
      APR: 19,
      MAY: 22,
      JUN: 20,
      JUL: 18,
      AUG: 30,
      SEP: 25,
      OCT: 40,
      NOV: 35,
      DEC: 40,
    },
  },
  streak: 40, // most continuous days
  locations: [
    // top cities
    "Prayagraj",
    "Delhi",
    "Khajuraho",
    "Gurugram",
    "Noida",
  ],
};

export default function YearReview() {
  const [userData, setUserData] = useState(testData);
  //const { user } = useContext(UserContext);

  useEffect(() => {
    const controller = new AbortController();
    fetchActivities(controller.signal).then((data) => setUserData(data));

    return () => controller.abort();
  }, []);

  return <>Year Review Page!</>;
}
