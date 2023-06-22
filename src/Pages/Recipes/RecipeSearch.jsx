import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

export default function RecipeSearch() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle
    ? "cursor-pointer text-[#1C1B1F]  text-[1.2rem] ssm:text-[1.5rem] "
    : "hidden";
  let checkStates = toggle
    ? "hidden"
    : "search relative text-[0.75rem] font-IBM pb-[0.5vh] text-[#370E00] ssm:text-[0.8rem] border-b-[1px] border-b-[#370E00] border-b-solid";

  return (
    <div className="overflow-hidden ">
      <AiOutlineSearch
        onClick={() => {
          handleClick();
        }}
        className={`${checkState}`}
      />
      <div className={`${checkStates}`}>
        <AiOutlineSearch className="absolute top-[0%] left-[2%] text-[#1C1B1F] text-[1rem] ssm:text-[1.2rem] " />
        <input
          className="w-[60%] ml-[20%] mr-[20%] bg-transparent outline-0 placeholder:text-[#370E00] placeholder:text-[0.7rem] ssm:placeholder:text-[0.8rem] "
          type="text"
          placeholder="Search"
        />
        <CgClose
          onClick={() => {
            handleClick();
          }}
          className="cursor-pointer absolute top-[0%] right-[2%] text-[#1C1B1F] text-[1rem] ssm:text-[1.2rem]"
        />
      </div>
    </div>
  );
}
