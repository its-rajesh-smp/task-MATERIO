// Imports
import React from "react";

// Lazy Imports
import Home from "../pages/Home/Home";
const UsersCRM = React.lazy(() => import("../pages/UsersCrm/UsersCRM"));
const InternalDatas = React.lazy(() =>
  import("../pages/InternalDatas/InternalDatas")
);
const SocialMedia = React.lazy(() =>
  import("../pages/SocialMedia/SocialMedia")
);
const Testimonials = React.lazy(() =>
  import("../pages/Testimonials/Testimonials")
);
const PlacementCRM = React.lazy(() =>
  import("../pages/PlacementCrm/PlacementCRM")
);

// Paths
export const paths = {
  HOME: "",
  USER_CRM: "usercrms",
  PLACEMENT_CRM: "placementcrms",
  INTERNAL_DATAS: "internaldatas",
  SOCIAL_MEDIA: "socialmedia",
  TESTIMONIALS: "testimonials",
};

// All Roles
const roles = {
  ADMIN: "ADMIN",
  SALES: "SALES",
  PLACEMENT: "PLACEMENT",
  MARKETING: "MARKETING",
};

/*
 isPrivate - Private Route
 accessRoles - Roles that can access the page.
*/
export const routes = [
  {
    name: "Home",
    path: paths.HOME,
    Component: Home,
    isPrivate: false,
  },
  {
    name: "User Crms",
    path: paths.USER_CRM,
    Component: UsersCRM,
    accessRoles: [roles.ADMIN, roles.SALES],
    isPrivate: true,
  },
  {
    name: "Placement Crm",
    path: paths.PLACEMENT_CRM,
    Component: PlacementCRM,
    accessRoles: [roles.ADMIN, roles.PLACEMENT],
    isPrivate: true,
  },
  {
    name: "Internal Datas",
    path: paths.INTERNAL_DATAS,
    Component: InternalDatas,
    accessRoles: [roles.ADMIN, roles.SALES],
    isPrivate: true,
  },
  {
    name: "Social Media",
    path: paths.SOCIAL_MEDIA,
    Component: SocialMedia,
    accessRoles: [roles.ADMIN, roles.MARKETING],
    isPrivate: true,
  },
  {
    name: "Testimonials",
    path: paths.TESTIMONIALS,
    Component: Testimonials,
    accessRoles: [roles.ADMIN, roles.MARKETING],
    isPrivate: true,
  },
];
