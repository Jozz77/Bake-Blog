import { Link } from "react-router-dom";
import Logo from "./Assets/Logo.png";
import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <footer className="px-[5%] py-[3vh] lg:py-[5vh] ">
      <section className="flex flex-wrap gap-[3%] md:gap-[5%] lg:gap-[7%]">
        <div className="w-[100%] sm:w-[40%] md:w-[35%] lg:w-[30%]">
          <Link to="/">
          <div className="flex items-center gap-[0%] ssm:gap-[5%]">
            <div>
              <img className="w-[60%] ssm:w-full" src={Logo} alt="Logo" />
            </div>
            <p className="text-normal text-[#370E00] ml-[-6%] text-[1rem] ssm:ml-[0] ssm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[160%] ">
              Flour Queen
            </p>
          </div>
          </Link>
          <p className="text-normal w-[90%] font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem] ssm:w-[70%] sm:w-full md:text-[1rem] leading-[32px] mt-[1vh] sm:mt-[2vh]">
            Welcome to my bake blog! My name is Flour Queen, and I am a
            passionate home baker who loves to experiment with new recipes and
            techniques in the kitchen.
          </p>
          <div className="flex gap-[2%] mt-[2vh] sm:mt-[1vh]">
            <ImFacebook className="text-[1.2rem] text-[#370E00]" />
            <AiOutlineInstagram className="text-[1.2rem] text-[#370E00]" />
            <CiTwitter className="text-[1.2rem] text-[#370E00]" />
          </div>
        </div>

        <div className="mr-[12%] mt-[3vh] ssm:mr-[40%] sm:mr-[0%]  ">
          <h3 className="text-normal mb-[1vh] text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[32px]">Site</h3>
          <Link to="/recipes" className="text-normal hover:text-[#A62B00] mt-[0.5vh] block font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]">My Recipes</Link>
          <Link to="/about" className="text-normal hover:text-[#A62B00] block mt-[0.5vh] font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]">About</Link>
          <Link to="/contact" className="text-normal v block mt-[0.5vh] font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]">Contact</Link>
        </div>

        <div className="mt-[4vh]">
          <h3 className="text-normal mb-[1vh] text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[32px]">Contact</h3>
          <p className="text-normal mt-[0.5vh] block font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]">flourqueengmail.com</p>
          <p className="text-normal mt-[0.5vh] block font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]">123 - 456 - 7890</p>
        </div>

        <div className="mt-[5vh]">
          <h3 className="text-normal mb-[1vh] text-[#370E00] text-[1.2rem] md:text-[1.4rem] leading-[32px]">Legal</h3>
          <Link to="" className="text-normal hover:text-[#A62B00] mt-[0.5vh] block font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]"> FAQ</Link>
          <Link to="" className="text-normal hover:text-[#A62B00] mt-[0.5vh] block font-IBM text-[#370E00] text-[0.95rem] sm:text-[0.85rem]  md:text-[1rem] leading-[150%]">Privacy Policy</Link>
        </div>
      </section>
      <section className="mt-[3vh] lg:mt-[5vh]">
        <p className="text-normal text-center font-IBM text-[0.95rem] sm:text-[0.85rem]  sm:text-left md:text-[1rem] leading-[150%]">@2023, Designed by <Link to="https://hijoygirl.com" target="_blank" className=" hover:text-[#A62B00]" >hijoygirl.com</Link> </p>
      </section>
    </footer>
  );
}