import { Link } from "react-router-dom";
import Image2 from "./Assets/Image2.png";
import Braunie from "./Assets/Braunie.png";
import "./SomethingOven.css";

export default function SomethingOven() {
  return (
    <section className="px-[5%] overflow-hidden text-center flex justify-between bg-[#DCE7D2] mt-[2vh]">
      <div className="w-[60%] py-[10vh]">
        <h2 className="text-[#A62B00] text-center font-normal text-[2rem] leading-[140%] mb-[3vh]">
          There’s Always Something in the Oven
        </h2>
        <Link to="">
          <button className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] text-[#370E00] text-center font-IBM font-bold text-[1.3rem] leading-[130%]  px-[4%] py-[1vh] bg-[#F3F6F1] border-solid border-[0.5px] border-[#000000] ">
            Sign Up For My Newsletter
          </button>
        </Link>
      </div>
      <div className="w-[40%] relative flex justify-center items-center">
        <section className="Img-container cursor-pointer">
          <div className="Img ">
            <img src={Braunie} className="w-full" alt="Braunie Image" />
          </div>
          <div>
            <img
              className="hoverImg absolute w-[50%] opacity-1 top-[10%] left-[25%] bottom-[10%] right-[25%]"
              src={Image2}
              alt="Girl with cakes"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
