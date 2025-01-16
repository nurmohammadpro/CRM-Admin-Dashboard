import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import userLogo from "../assets/user-logo.png";
import Button from "./Button";

export default function Navbar() {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="absolute z-10 top-0 left-0 bg-primary w-full h-auto py-2 shadow-md shadow-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />

        {isDashboard ? (
          <div className="flex items-center justify-between gap-4">
            <NotificationsIcon />
            <img
              src={userLogo}
              alt="userLogo"
              className="w-8 h-8 object-contain"
            />
          </div>
        ) : (
          <div>
            <Button type="submit" title="Sign In" />
          </div>
        )}
      </div>
    </div>
  );
}
