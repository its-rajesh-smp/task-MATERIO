//Imports
import React from "react";
import { useSelector } from "react-redux";
import AccessDenied from "../pages/AccessDenied/AccessDenied";

function ProtectedRoute({ Component, accessRoles, isPrivate }) {
  const { userRole } = useSelector((state) => state.authSlice);

  /*
    Checking for user access
    if isPrivate then checking for the accessibility
    else showing as normal.
  */
  const isAccessible = isPrivate
    ? accessRoles.find((role) => role === userRole)
    : true;

  return isAccessible ? <Component /> : <AccessDenied />;
}

export default ProtectedRoute;
