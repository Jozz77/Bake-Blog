import { Link } from "react-router-dom";
import Logo from "./Assets/Logo.png";
import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-[5%] py-[2vh] ">
      <section className="flex">
        <div className="w-[20%]">
          <div className="flex items-center gap-[7%] w-[20%]">
            <div>
              <img className="w-full" src={Logo} alt="Logo" />
            </div>
            <p className="text-normal text-[#370E00] text-[1.4rem] leading-[32px] ">
              Flour Queen
            </p>
          </div>
          <p>
            Welcome to my bake blog! My name is Flour Queen, and I am a
            passionate home baker who loves to experiment with new recipes and
            techniques in the kitchen.
          </p>
          <div className="flex">
            <ImFacebook />
            <AiOutlineInstagram />
            <CiTwitter />
          </div>
        </div>

        <div>
          <h3>Site</h3>
          <Link to="">My Recipes</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>flourqueengmail.com</p>
          <p>123 - 456 - 7890</p>
        </div>

        <div>
          <h3>Site</h3>
          <Link to="">FAQ</Link>
          <Link to="">Privacy Policy</Link>
        </div>
      </section>
    </footer>
  );
}
