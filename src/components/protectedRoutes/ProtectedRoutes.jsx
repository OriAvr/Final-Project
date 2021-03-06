import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

// const useAuth = () => {
//   const loggedIn = useSelector((state) => state.auth.loggedIn);
//   return loggedIn;
// };

const FavoritesRoute = () => {
  const isLogged = useSelector((state) => state.auth.loggedIn);
  console.log(isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

const AdminRoute = () => {
  const token = localStorage.getItem("tokenKey");
  const decoded = jwt_decode(token);
  const isAdmin = decoded.biz;
  console.log(decoded.isAdmin);

  console.log(isAdmin);

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export { FavoritesRoute, AdminRoute };
