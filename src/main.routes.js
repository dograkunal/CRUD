import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Loader from "./components/loader/loader";
import PrivateRoute from "./utils/auth/PrivateRoute";
import PublicRoute from "./utils/auth/PublicRoute";

const Login = React.lazy(() => import("./views/login/login"));
const Register = React.lazy(() => import("./views/register/register"));

export function CustomRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <Login />
            </PublicRoute>
          </React.Suspense>
        }
      />

      <Route
        path="/register"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <Register />
            </PublicRoute>
          </React.Suspense>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

// export default CustomRoutes;
