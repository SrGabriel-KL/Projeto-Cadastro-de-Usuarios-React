import { createHashRouter } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers/usuarios";
import Usuario from "./pages/Dashboard/usuario";
import ForgotPassword from "./pages/Password/ForgotPassword";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Usuario />
  },
  {
    path: "/lista-de-usuarios",
    element: <ListUsers />
  },
  {
    path: "/recuperar-senha",
    element: <ForgotPassword />
  }
]);

export default router;