import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import registerIcon from "../assets/registerIcon.png";
import SignUpImg from "../assets/SignUp-Img.png";
import Button from "./Button";

export default function Signup() {
  return (
    <div className="flex bg-secondary z-0">
      <div className="w-[400px] bg-primary flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src={registerIcon}
              alt="register icon"
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="font-medium text-xl">Sign Up Now</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button title="Google" type="submit" icon={<GoogleIcon />} />
            <Button title="Facebook" type="submit" icon={<FacebookIcon />} />
          </div>

          <div className="flex items-center justify-center py-8">
            <p className="text-txtsec">---- Or ----</p>
          </div>

          <div className="w-4/5">
            <form action="">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-none px-4 py-3 rounded-md text-sm bg-primary focus:outline-1 focus:outline-secondary"
                />
                <label htmlFor="" className="">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-none px-4 py-3 rounded-md text-sm bg-primary focus:outline-1 focus:outline-secondaryy-400 rounded-md px-4 py-2"
                />
                <label htmlFor="" className="">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border-none px-4 py-3 rounded-md text-sm bg-primary focus:outline-1 focus:outline-secondary"
                />
                <label htmlFor="" className="">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border-none px-4 py-3 rounded-md text-sm bg-primary focus:outline-1 focus:outline-secondary"
                />
                <div className="flex items-center justify-center gap-4 my-4">
                  <div className="flex items-start">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <label htmlFor="" className="">
                    By creating an account you agree to the terms of use and our
                    privacy policy.
                  </label>
                </div>
                <div className="flex items-center justify-center">
                  <Button title="Sign Up" type="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="my-4">
          <p>Already have an account? Sign In</p>
        </div>
      </div>
      <div className="flex items-center justify-center ml-[400px]">
        <img src={SignUpImg} alt="" />
      </div>
    </div>
  );
}
