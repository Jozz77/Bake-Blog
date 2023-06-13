import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import './LoveIcon.css'

export default function LoveIcon() {
    const [toggle, setToggle] = useState(true);

    function handleClick() {
      setToggle((toggle) => !toggle);
    }
    let checkState = toggle ? "lovenofill text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" : "hidden";
    let checkStates = toggle ? "hidden" : "lovefill text-[#CC3333] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]";
  

  return (
    <div className="cursor-pointer">
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
  )
}
