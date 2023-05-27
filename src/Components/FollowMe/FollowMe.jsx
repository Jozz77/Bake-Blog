import { useState } from "react";
import Image1 from "./Assets/Image1.png";
import FollowDescription from "./FollowDescription";
import "./FollowMe.css";

export default function FollowMe() {
  const [show, setShow] = useState(false)

  return (
    <section className="px-[5%]  py-[5vh]">
      <h3 className="text-[#A62B00] font-normal text-[2rem] leading-[140%] pb-[3vh]">
        Follow Me <i>@myjoygirl</i>
      </h3>
      <div className="flex  gap-[2%] justify-between">
        <div className="relative content" onMouseOver={() => setShow(true)}>
          <div className="w-[23]">
            <img src={Image1} className="w-full" alt="Braunie Image" />
          </div>
          <FollowDescription show={show} onClose={() => setShow(false)}/>
        </div>

        <div className="w-[23]">
          <img src={Image1} className="w-full" alt="Braunie Image" />
        </div>
        <div className="w-[23]">
          <img src={Image1} className="w-full" alt="Braunie Image" />
        </div>
        <div className="w-[23]">
          <img src={Image1} className="w-full" alt="Braunie Image" />
        </div>
      </div>
      <hr className="mt-[2vh] border-solid  border-[0.5px]" />
    </section>
  );
}
