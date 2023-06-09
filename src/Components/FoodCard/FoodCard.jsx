import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./FoodCard.css";
import LoveIcon from "../LoveIcon/LoveIcon";

export default function FoodCard(props) {

  return (
    <div className="FoodCard mb-[2vh] bg-[#E8EFE1] mx-[auto] w-[90%] px-[1.5%] py-[1vh] sm:mb-[0] sm:w-[32%] lg:w-[30%] lg:py-[2vh]">
      <Link to={props.link}>
        <div>
          <img className="w-full" src={props.img} alt="" />
        </div>
        <h2 className="hover:text-[#370E00] font-normal text-[#A62B00] text-[1.5rem] leading-[120%] pt-[1vh] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] lg:pt-[2vh] xl:text-[1.6rem] ">
          {props.title}
        </h2>

        <p className="font-normal font-IBM text-[#370E00] text-[1rem] leading-[150%] pt-[0.5vh] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[1rem] lg:pt-[1vh] xl:text-[1.2rem] ">
        {props.text}
        </p>
      </Link>
      <hr className="border-solid border-[#B5C7A5] border-[0.5px] mt-[0.5vh] md:mt-[1vh]" />
      <section className="flex justify-between items-center mt-[1vh]">
        <div className="flex items-center gap-[20%] md:gap-[15%] ">
          <div>
            <AiOutlineEye className="text-[#370E00] text-[1rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
          </div>
          <p className="font-normal font-IBM text-[#370E00] text-[1rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]">0</p>
        </div>
        <div>
          <LoveIcon />
        </div>
      </section>
    </div>
  );
}
