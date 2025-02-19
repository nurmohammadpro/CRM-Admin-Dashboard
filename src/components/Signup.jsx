import SignUpImg from "../assets/SignUp-Img.png";
import AuthSidebar from "./AuthSidebar";
export default function Signup() {
  return (
    <div className="flex">
      <AuthSidebar />

      <div className="flex items-center justify-center w-2/3 object-cover">
        <img src={SignUpImg} alt="" className="w-2/3 h-auto" />
      </div>
    </div>
  );
}
