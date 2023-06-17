import "./ShareIcon.css";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function ShareIcon() {
    
  return (
    <div className="share cursor-pointer relative overflow-hidden py-[1vh] px-[5%] ">
      <AiOutlineShareAlt className="share1 text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
      <div className="shareHover opacity-0 absolute top-0 left-0 bottom-0 right-0 ">
        <div className="flex justify-between bg-[#B5C7A5] py-[1vh] px-[5%] ">
        <AiOutlineShareAlt className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
        <AiOutlineShareAlt className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
        <AiOutlineShareAlt className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
}
