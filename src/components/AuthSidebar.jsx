import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignInIcon from "../assets/login-Icon.png";
import SignupIcon from "../assets/registerIcon.png";
import { auth } from "../components/config/firebase";
import Button from "./Button";
import Icon from "./Icon";
import InputField from "./InputField";

export default function AuthSidebar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";

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
            <form
              className="flex flex-col w-full gap-4 my-4"
              onSubmit={handleSignUp}
            >
              {/* Optional Full Name Field */}
              {/* <InputField
                label="Full Name"
                placeholder="Enter your full name"
                type="text"
              /> */}
              <InputField
                label="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button title="Sign Up" type="submit" />
            </form>
          ) : (
            <form
              className="flex flex-col w-full gap-4 my-4"
              onSubmit={handleSignIn}
            >
              <InputField
                label="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(value) => setPassword(value)}
              />
              <Button title="Sign In" type="submit" />
            </form>
          )}
          {console.log(email, password)}
          <p className="text-txtsec">
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
