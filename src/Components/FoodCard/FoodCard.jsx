import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./FoodCard.css";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

export default function FoodCard(props) {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle ? "text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" : "hidden";
  let checkStates = toggle ? "hidden" : "text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]";

  return (
    <div className="FoodCard bg-[#E8EFE1] w-[32%] px-[1.5%] py-[1vh] lg:w-[30%] lg:py-[2vh]">
      <Link to={props.link}>
        <div>
          <img className="w-full" src={props.img} alt="" />
        </div>
        <h2 className="hover:text-[#370E00] font-normal text-[#A62B00] text-[0.9rem] leading-[120%] pt-[1vh] md:text-[1rem] lg:text-[1.3rem] lg:pt-[2vh] xl:text-[1.6rem] ">
          {props.title}
        </h2>

        <p className="font-normal font-IBM text-[#370E00] text-[0.8rem] leading-[150%] pt-[0.5vh] md:text-[0.85rem] lg:text-[1rem] lg:pt-[1vh] xl:text-[1.2rem] ">
        {props.text}
        </p>
      </Link>
      <hr className="border-solid border-[#B5C7A5] border-[0.5px] mt-[0.5vh] md:mt-[1vh]" />
      <section className="flex justify-between items-center mt-[1vh]">
        <div className="flex items-center gap-[20%] md:gap-[15%] ">
          <div>
            <AiOutlineEye className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
          </div>
          <p className="font-normal font-IBM text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]">0</p>
        </div>
        <div>
          <AiOutlineHeart
            onClick={() => {
              handleClick();
            }}
            className={`${checkState}`}
          />
          <AiFillHeart
            onClick={() => {
              handleClick();
            }}
            className={`${checkStates}`}
          />
        </div>
      </section>
    </div>
  );
}
