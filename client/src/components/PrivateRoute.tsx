import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import UserContext from "../contexts/userContext";

export default function PrivateRoute() {
  const { user } = useContext(UserContext);
  console.log("user available in privateroute:", user);

  return user !== null ? <Outlet /> : <Navigate to="/login" replace />;
}
