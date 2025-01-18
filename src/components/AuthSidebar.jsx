import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInIcon from "../assets/login-Icon.png";
import SignupIcon from "../assets/registerIcon.png";
import Icon from "./Icon";
export default function AuthSidebar() {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";

  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation(isSignUpPage ? "/signin" : "/signup");
  };

  return (
    <div>
      <div className="bg-primary w-[450px] h-screen flex flex-col items-center justify-center">
        <Icon
          src={isSignUpPage ? SignupIcon : SignInIcon}
          alt={isSignUpPage ? "Sign Up Icon" : "Sign In Icon"}
          width={60}
          height={60}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-txtsec">
            {isSignUpPage ? "Sign Up" : "Sign In"}
          </p>
          <p className=" text-txtsec">
            {isSignUpPage ? (
              <>
                Already have an account?{" "}
                <Link to="/signin" className="font-medium hover:underline">
                  Sign In
                </Link>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium hover:underline">
                  Sign Up
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
