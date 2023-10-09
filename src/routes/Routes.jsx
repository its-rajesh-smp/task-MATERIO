// Imports
import React, { Suspense } from "react";
import { Route, Routes as BrowserRoutes } from "react-router-dom";
import { routes } from "./route_config";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

// Pages
import Login from "../pages/Loging/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Loading from "../pages/Loading/Loading";

function Routes() {
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRoutes>
        {isLoggedIn ? (
          routes.map((route) => (
            <Route
              key={route.name}
              path={`/${route.path}`}
              element={
                <ProtectedRoute Component={route.Component} {...route} />
              }
            />
          ))
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        )}

        <Route path="*" element={<PageNotFound />} />
      </BrowserRoutes>
    </Suspense>
  );
}

export default Routes;
