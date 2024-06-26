import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../context/index";

function MyRoutes() {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default MyRoutes;
