import { Link } from "react-router-dom";
import SugarGirl from "./Assets/SugarGirl.png";
import Braunie from "./Assets/Braunie.png";

export default function SomethingOven() {
  return (
    <section className="px-[5%] py-[7vh] text-center flex justify-between bg-[#DCE7D2] mt-[2vh]">
        <div className="w-[50%] ">
          <h2 className="text-[#A62B00] text-center font-normal text-[2rem] leading-[140%] mb-[3vh]">
            There’s Always Something in the Oven
          </h2>
          <Link to="">
            <button className="text-[#370E00] text-center font-IBM font-normal text-[1.3rem] leading-[130%]  px-[4%] py-[0.5vh] bg-[#F3F6F1] border-solid border-[0.5px] border-[#000000] ">
              Sign Up For My Newsletter
            </button>
          </Link>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="img relative w-[100%] ">
            <img src={Braunie} className="w-[10%]" alt="Braunie Image" />
            <img
              className="img-hover absolute w-[30%] hidden top-0 left-0"
              src={SugarGirl}
              alt="Girl with cakes"
            />
          </div>
        </div>
      </section>
  )
}
