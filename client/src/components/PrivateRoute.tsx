import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import TokenContext from "../contexts/tokenContext";

export default function PrivateRoute() {
  const { token } = useContext(TokenContext);
  console.log("token in privateroute:", token);

  return token !== "" ? <Outlet /> : <Navigate to="/login" replace />;
}
