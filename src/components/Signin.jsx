import SignInImg from "../assets/SignIn-Img.png";
import AuthSidebar from "./AuthSidebar";
export default function Signin() {
  return (
    <div className="flex">
      <AuthSidebar />
      <div className="flex items-center justify-center w-2/3 object-cover">
        <img src={SignInImg} alt="" className="w-2/3 h-auto" />
      </div>
    </div>
  );
}
