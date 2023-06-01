import { Link } from "react-router-dom";
import Logo from "./Assets/Logo.png";
import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-[5%] py-[3vh] lg:py-[5vh] ">
      <section className="flex gap-[3%] md:gap-[5%] lg:gap-[7%]">
        <div className="w-[40%] md:w-[35%] lg:w-[30%]">
          <div className="flex items-center gap-[5%]">
            <div>
              <img className="w-full" src={Logo} alt="Logo" />
            </div>
            <p className="text-normal text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[160%] ">
              Flour Queen
            </p>
          </div>
          <p className="text-normal font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[32px] mt-[2vh]">
            Welcome to my bake blog! My name is Flour Queen, and I am a
            passionate home baker who loves to experiment with new recipes and
            techniques in the kitchen.
          </p>
          <div className="flex gap-[2%] mt-[1vh]">
            <ImFacebook className="text-[1.2rem] text-[#370E00]" />
            <AiOutlineInstagram className="text-[1.2rem] text-[#370E00]" />
            <CiTwitter className="text-[1.2rem] text-[#370E00]" />
          </div>
        </div>

        <div className="mt-[3vh] ">
          <h3 className="text-normal mb-[1vh] text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[32px]">Site</h3>
          <Link to="" className="text-normal hover:text-[#A62B00] mt-[0.5vh] block font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]">My Recipes</Link>
          <Link to="" className="text-normal hover:text-[#A62B00] block mt-[0.5vh] font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]">About</Link>
          <Link to="" className="text-normal v block mt-[0.5vh] font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]">Contact</Link>
        </div>

        <div className="mt-[4vh]">
          <h3 className="text-normal mb-[1vh] text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[32px]">Contact</h3>
          <p className="text-normal mt-[0.5vh] block font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]">flourqueengmail.com</p>
          <p className="text-normal mt-[0.5vh] block font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]">123 - 456 - 7890</p>
        </div>

        <div className="mt-[5vh]">
          <h3 className="text-normal mb-[1vh] text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[32px]">Legal</h3>
          <Link to="" className="text-normal hover:text-[#A62B00] mt-[0.5vh] block font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]"> FAQ</Link>
          <Link to="" className="text-normal hover:text-[#A62B00] mt-[0.5vh] block font-IBM text-[#370E00] text-[0.85rem] md:text-[1rem] leading-[150%]">Privacy Policy</Link>
        </div>
      </section>
      <section className="mt-[3vh] lg:mt-[5vh]">
        <p className="text-normal font-IBM text-[0.85rem] md:text-[1rem] leading-[150%]">@2023 by Flour Queen</p>
      </section>
    </footer>
  );
}
