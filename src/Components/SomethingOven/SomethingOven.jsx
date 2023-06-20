import { Link } from "react-router-dom";
import Image2 from "./Assets/Image2.png";
import Braunie from "./Assets/Braunie.png";
import "./SomethingOven.css";

export default function SomethingOven() {
  return (
    <section className="px-[5%] overflow-hidden text-center flex-column justify-between bg-[#DCE7D2] mt-[2vh] sm:flex">
      <div className="w-[100%] py-[4vh] sm:py-[7vh] lg:py-[10vh] sm:w-[60%]">
        <h2 className="text-[#A62B00] text-center font-normal text-[1.3rem] leading-[140%] mb-[1.5vh] md:text-[1.5rem]  lg:mb-[3vh] lg:text-[2rem] ">
          There’s Always Something in the Oven
        </h2>
        <Link to="">
          <button className="hover:bg-[#B5C7A5] rounded-[8px] hover:border-[#B5C7A5] text-[#370E00] text-center font-IBM font-bold text-[0.8rem] leading-[130%]  px-[4%] py-[0.7vh] bg-[#F3F6F1] border-solid border-[0.5px] border-[#000000] md:text-[1rem] lg:py-[1vh] lg:text-[1.3rem]  ">
            Sign Up For My Newsletter
          </button>
        </Link>
      </div>
      <div className="w-[100%] relative pb-[15vh] ssm:pb-[20vh] flex justify-center items-center sm:pb-[0] sm:w-[40%]">
        <section className="Img-container cursor-pointer">
          <div className="Img ">
            <img src={Braunie} className="w-full" alt="Braunie Image" />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="hoverImg absolute mx-[auto] my-[0] w-[50%] opacity-1 top-[0%] left-[0%] bottom-[0%] right-[0%] sm:my-[auto] "
              src={Image2}
              alt="Girl with cakes"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
