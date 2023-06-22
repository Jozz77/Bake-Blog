import { useState } from "react";
import "./ShareIcon.css";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ShareIcon() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle
    ? " cursor-pointer text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]"
    : "hidden";
  let checkStates = toggle
    ? "hidden"
    : "flex justify-between bg-[#B5C7A5] py-[1vh] px-[5%] ";

  return (
    <div className="relative flex items-center justify-end py-[1vh] px-[5%] ">
      <AiOutlineShareAlt
       onClick={() => {
        handleClick();
      }}
      className={`${checkState}`}
      />

      <div
       onClick={() => {
        handleClick();
      }}
      className={`${checkStates}`}
      >
        <Link to="">
          <ImFacebook className="text-[#370E00] my-[auto] text-[0.7rem] ssm:text-[0.8rem] pr-[20%] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
        </Link>
        <Link to="">
          <AiOutlineInstagram className="text-[#370E00] text-[0.7rem] ssm:text-[0.8rem] pr-[20%] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
        </Link>
        <Link to="">
          <CiTwitter className="text-[#370E00] pr-[20%] text-[0.7rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
        </Link>
      </div>
    </div>
  );
}
