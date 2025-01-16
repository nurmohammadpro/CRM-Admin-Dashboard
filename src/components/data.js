import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

export const SidebarMenuItems = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AlternateEmailIcon />,
  },
  {
    title: "Sign Up",
    path: "/signup",
    icon: <ExitToAppIcon />,
  },
];
