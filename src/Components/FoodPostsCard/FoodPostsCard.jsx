import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./FoodPostsCard.css";
import LoveIcon from "../LoveIcon/LoveIcon";
import ShareIcon from "../LoveIcon/ShareIcon";

export default function FoodPostsCard(props) {

  return (
    <div className="FoodPostsCard bg-[#E8EFE1] w-[48%] px-[1.5%] py-[1vh] lg:w-[31%] sm:w-[32%] lg:py-[2vh] xl:w-[30%]">
      <Link to={props.link}>
        <div className="follow">
          <div>
            <img className="w-full" src={props.img} alt="" />
          </div>
          <div className="des-content-top absolute top-0 left-0 bottom-0 right-0 ">
            <img className="w-full" src={props.hoverImg} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center pt-[1vh] lg:pt-[2vh]">
          <h2 className="hover:text-[#370E00] font-normal text-[#A62B00] text-[0.8rem] leading-[120%] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.3rem]  xl:text-[1.6rem] ">
            {props.title}
          </h2>
          <div className="">
           <ShareIcon />
          </div>
        </div>

        <p className="font-normal h-[8vh] font-IBM text-[#370E00] text-[0.6rem] leading-[150%] pt-[0.5vh] ssm:h-[auto] ssm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] lg:pt-[1vh] xl:text-[1.2rem] ">
          {props.text}
        </p>
      </Link>
      <hr className="border-solid border-[#B5C7A5] border-[0.5px] mt-[0.5vh] md:mt-[1vh]" />
      <section className="flex justify-between items-center mt-[1vh]">
        <div className="flex items-center gap-[20%] md:gap-[15%] ">
          <div>
            <AiOutlineEye className="text-[#370E00] text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]" />
          </div>
        </div>
        <div>
          <LoveIcon />
        </div>
      </section>
    </div>
  );
}
