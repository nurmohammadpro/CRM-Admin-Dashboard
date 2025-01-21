import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInIcon from "../assets/login-Icon.png";
import SignupIcon from "../assets/registerIcon.png";
import Button from "./Button";
import Icon from "./Icon";
import InputField from "./InputField";

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
        <div className="flex w-72 flex-col items-center justify-center">
          <p className="text-2xl font-bold text-txtsec">
            {isSignUpPage ? "Sign Up" : "Sign In"}
          </p>
          {isSignUpPage ? (
            <form className="flex flex-col w-full gap-4 my-4" action="">
              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                type="text"
              />
              <InputField
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <Button title="Sign Up" type="submit" />
            </form>
          ) : (
            <form className="flex flex-col w-full gap-4 my-4" action="">
              <InputField
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <Button title="Sign In" type="submit" />
            </form>
          )}

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
