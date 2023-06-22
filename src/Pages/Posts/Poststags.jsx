import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import LoveIcon from "../../Components/LoveIcon/LoveIcon";
import { Link } from "react-router-dom";

export default function Poststags() {

  return (
    <div>
      <small className="text-[#370E00] font-normal text-[0.8rem] text-justify leading-[150%] sm:text-[0.9rem] md:text-[1rem]">
        Tags
      </small>
      <p className="text-[#370E00] font-normal text-[1rem] text-justify leading-[150%] pb-[1vh] sm:text-[1.2rem] md:text-[1.3rem]  ">
        Sweet
      </p>
      <hr />
      <div className="flex gap-[2%] my-[2vh]">
        <Link to=''><ImFacebook className="text-[1rem] ssm:text-[1.2rem] text-[#370E00]" /></Link>
        <Link to=''><AiOutlineInstagram className="text-[1rem] ssm:text-[1.2rem] text-[#370E00]" /></Link>
        <Link to=''><CiTwitter className="text-[1rem] ssm:text-[1.2rem] text-[#370E00]" /></Link>
      </div>
      <hr />
      <div className="flex justify-between items-center py-[2vh] w-full">
        <div className="flex gap-[0%] w-[70%] pt-[0vh] ssm:pt-[1vh] text-[#370E00] font-normal text-[0.9rem] sm:text-[1.1rem] text-justify leading-[150%] ssm:w-[50%] sm:gap-[5%] sm:w-[40%] md:w-[30%] ">
          <p className="mr-[5%] sm:mr-[0]">0 views</p>
          <p>0 comments</p>
        </div>
        <div className="cursor-pointer ">
          <LoveIcon />
        </div>
      </div>
    </div>
  );
}
