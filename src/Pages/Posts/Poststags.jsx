import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function Poststags() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle
    ? "text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]"
    : "hidden";
  let checkStates = toggle
    ? "hidden"
    : "text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]";
  return (
    <div>
      <small className="text-[#370E00] font-normal text-[0.9rem] text-justify leading-[150%] md:ext-[1rem]">
        Tags
      </small>
      <p className="text-[#370E00] font-normal text-[1.2rem] text-justify leading-[150%] pb-[1vh] md:text-[1.3rem]  ">
        Sweet
      </p>
      <hr />
      <div className="flex gap-[2%] my-[2vh]">
        <ImFacebook className="text-[1.2rem] text-[#370E00]" />
        <AiOutlineInstagram className="text-[1.2rem] text-[#370E00]" />
        <CiTwitter className="text-[1.2rem] text-[#370E00]" />
      </div>
      <hr />
      <div className="flex justify-between items-center py-[2vh] w-full">
        <div className="flex gap-[5%] w-[40%] pt-[1vh] text-[#370E00] font-normal text-[1.1rem] text-justify leading-[150%] md:w-[30%] ">
          <p>0 views</p>
          <p>0 comments</p>
        </div>
        <div className="cursor-pointer ">
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
      </div>
    </div>
  );
}
