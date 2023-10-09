// Imports
import React from "react";
import { Box, Divider } from "@mui/material";
import { BRAND_IMAGE } from "../../config/app_config";
import {
  AssignmentIndRounded,
  LoginOutlined,
  FacebookOutlined,
  DataArray,
  Groups3Rounded,
  LanguageOutlined,
  PersonAddAlt1Outlined,
  Home,
} from "@mui/icons-material";
import SideBarItem from "./UI/SideBarItem";

// SCSS Imports
import "./SideBar.scss";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/reducers/authSlice";
import { paths } from "../../routes/route_config";

function SideBar() {
  const dispatch = useDispatch();

  const logoutHandeler = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="sidebar">
      <Box className="sidebar_brand_box">
        <img className="brandIcon" src={BRAND_IMAGE} alt="" />
        <h1>MATERIO</h1>
      </Box>

      <Box className="sidebarItemBox">
        <SideBarItem path="/" icon={<Home />} title="Home" />
        <SideBarItem
          path={paths.USER_CRM}
          icon={<AssignmentIndRounded />}
          title="User CRM"
        />

        <Divider className="sidebarItemBox_divider" variant="" textAlign="left">
          PAGES
        </Divider>

        <SideBarItem
          path={paths.SOCIAL_MEDIA}
          icon={<FacebookOutlined />}
          title="Social Media"
        />
        <SideBarItem
          path={paths.INTERNAL_DATAS}
          icon={<DataArray />}
          title="Internal Datas"
        />
        <SideBarItem
          path={paths.TESTIMONIALS}
          icon={<Groups3Rounded />}
          title="Testimonials"
        />
        <SideBarItem
          path={paths.PLACEMENT_CRM}
          icon={<LanguageOutlined />}
          title="Placement CRM"
        />

        <Divider className="sidebarItemBox_divider" variant="" textAlign="left">
          USER
        </Divider>

        <SideBarItem
          onClick={logoutHandeler}
          icon={<LoginOutlined />}
          title="Login"
        />
        <SideBarItem
          onClick={logoutHandeler}
          icon={<PersonAddAlt1Outlined />}
          title="Register"
        />
      </Box>
    </div>
  );
}

export default SideBar;
