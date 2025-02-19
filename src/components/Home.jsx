import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/SAAS-Hero-Img.png";
import Button from "./Button";

export default function Home() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-[1440px] mx-auto h-screen p-4">
      <div className="hero-text flex flex-col gap-4 md:w-full">
        <h1 className="font-bold text-6xl lg:text-8xl">
          CRM App for{" "}
          <span className="font-extrabold text-xtraCo">Everyone</span>
        </h1>
        <p className="mb-6 font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
          eligendi, eius distinctio aliquid corrupti fugiat officia voluptatem
          eum sit nobis provident. Dolores, atque. Possimus laborum autem nulla
          quos? Nostrum, corporis.
        </p>
        <Button onClick={handleSignup} type="submit" title="Get Started" />
      </div>
      <div className="hero-img md:w-full ">
        <img src={HeroImage} alt="Hero Image" className="w-full" />
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-txtsec text-sm">
        Developed By <span className="font-semibold">TechTweaks</span>
      </div>
    </div>
  );
}
