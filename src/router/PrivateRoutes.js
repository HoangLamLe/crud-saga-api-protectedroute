import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { isLoginSelector } from "../saga/Auth/auth.selector";
const PrivateRoutes = () => {
  const isLogin = useSelector(isLoginSelector);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
