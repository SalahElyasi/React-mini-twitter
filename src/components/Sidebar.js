import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";

import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <Link to="/Messages">
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      </Link>

      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <Link to="/Users">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </Link>
      <SidebarOption Icon={MoreHorizIcon} text="More" />
    </div>
  );
};

export default Sidebar;
