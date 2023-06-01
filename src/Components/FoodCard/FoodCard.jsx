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
  let checkState = toggle ? "text-[#370E00] text-[1.5rem]" : "hidden";
  let checkStates = toggle ? "hidden" : "text-[#370E00] text-[1.5rem]";

  return (
    <div className="FoodCard bg-[#E8EFE1] w-[30%] px-[1.5%] py-[2vh]">
      <Link to="/posts1">
        <div>
          <img className="w-full" src={props.img} alt="" />
        </div>
        <h2 className="hover:text-[#370E00] font-normal h-[10vh] text-[#A62B00] text-[1.8rem] leading-[120%] pt-[2vh] ">
          {props.title}
        </h2>

        <p className="font-normal font-IBM text-[#370E00] text-[1.2rem] leading-[150%] pt-[1vh] ">
        {props.text}
        </p>
      </Link>
      <hr className="border-solid border-[#B5C7A5] border-[0.5px] mt-[1vh]" />
      <section className="flex justify-between items-center mt-[1vh]">
        <div className="flex items-center gap-[10%] ">
          <div>
            <AiOutlineEye className="text-[#370E00] text-[1.5rem]" />
          </div>
          <p className="font-normal font-IBM text-[#370E00] text-[1.5rem]">0</p>
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
