import { AiOutlineEye } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./PostsCard.css";
import LoveIcon from "../LoveIcon/LoveIcon";

export default function PostsCard(props) {

  return (
    <div className="PostsCard bg-[#E8EFE1] w-[48%] px-[1.5%] py-[1vh] lg:w-[48%] lg:py-[2vh] xl:w-[48%]">
      <Link to={props.link}>
        <div className="follow">
          <div>
            <img className="w-full" src={props.img} alt="" />
          </div>
          <div className="des-content-top absolute top-0 left-0 bottom-0 right-0 ">
            <div className=" bg-[#B5C7A5] absolute top-0 left-0 bottom-0 right-0 py-[1vh] px-[5%] xl:y-[3vh]">
              <h1 className="text-[1.1rem] font-normal text-[#A62B00] leading-[120%] md:text-[1.2rem]  lg:text-[1.4rem] xl:text-[1.9rem] ">
                {props.hoverTitle}
              </h1>
              <p className="text-[0.65rem] font-IBM text-[#370E00] leading-[120%] pt-[0.7vh] md:text-[0.75rem]  lg:text-[0.9rem] xl:text-[1.05rem] xl:pt-[2vh]">
                {props.hoverText}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-[0.5vh] pt-[1vh] md:y-[1vh] lg:py-[1.5vh] xl:py-[2vh]">
          <h2 className="hover:text-[#370E00] font-normal text-[#A62B00] text-[0.9rem] leading-[120%]  md:text-[1rem] lg:text-[1.3rem]  xl:text-[1.6rem] ">
            {props.title}
          </h2>
        </div>
      </Link>

      <hr className="border-solid border-[#B5C7A5] border-[0.5px] mt-[0.5vh] md:mt-[0.5vh]" />

      <section className="flex justify-between items-center mt-[1vh] md:mt-[2vh]">
        <div className="flex items-center gap-[20%] md:gap-[15%] ">
          <div>
            <BiComment className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
          </div>
          <div>
            <AiOutlineEye className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
          </div>
        </div>

        <div className="cursor-pointer ">
          <LoveIcon />
        </div>
      </section>
    </div>
  );
}
