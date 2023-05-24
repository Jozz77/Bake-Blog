import { ImFacebook } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";


export default function Poststags() {
  return (
    <div>
        <small>Tags</small>
        <p>Small</p>
        <hr />
        <div className="flex gap-[2%] mt-[1vh]">
            <ImFacebook className="text-[1.2rem] text-[#370E00]" />
            <AiOutlineInstagram className="text-[1.2rem] text-[#370E00]" />
            <CiTwitter className="text-[1.2rem] text-[#370E00]" />
          </div>
          <hr />
          <div className="flex gap-[2%]">
            <p>0 views</p>
            <p>0 comments</p>
          </div>
    </div>
  )
}
