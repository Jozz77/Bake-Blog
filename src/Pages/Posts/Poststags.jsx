import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";


export default function Poststags() {
  return (
    <div>
        <small className="text-[#370E00] font-normal text-[1.1rem] text-justify leading-[150%]">Tags</small>
        <p className="text-[#370E00] font-normal text-[1.4rem] text-justify leading-[150%] pb-[1vh] ">Sweet</p>
        <hr />
        <div className="flex gap-[2%] my-[2vh]">
            <ImFacebook className="text-[1.2rem] text-[#370E00]" />
            <AiOutlineInstagram className="text-[1.2rem] text-[#370E00]"/>
            <CiTwitter className="text-[1.2rem] text-[#370E00]" />
          </div>
          <hr />
          <div className="flex justify-between items-center py-[2vh] w-full">
            <div className="flex gap-[2%] w-[30%] pt-[1vh] text-[#370E00] font-normal text-[1.1rem] text-justify leading-[150%]">
              <p>0 views</p>
              <p>0 comments</p>
            </div>
            <div>
              <AiOutlineHeart />
            </div>
          </div>
          
    </div>
  )
}
