import { Link } from "react-router-dom";

const FollowDescription = (props) => {
  return (
    <div className=" bg-[#B5C7A5] absolute top-0 left-0 bottom-0 right-0 py-[2vh] px-[5%] ssm:py-[1vh] ssm:text-[1.1rem] sm:py-[2vh] lg:y-[1vh] xl:py-[2vh]">
      <h1 className="text-[1.5rem] text-[#A62B00] leading-[120%] sm:text-[1.5rem] md:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.3rem]">{props.title}</h1>
      <p className="text-[1rem] h-[65%] block items-center ssm:flex ssm:text-[0.7rem] ssm:h-[60%] sm:block font-IBM text-[#370E00] leading-[120%] mb-[3vh] pt-[1vh] ssm:pt-[0.5vh] sm:pt-[1.5vh] sm:h-[65%] sm:text-[0.95rem] ssm:md:pt-[1vh] mb-[2vh] md:text-[0.75rem] md:pt-[1vh] xl:pt-[1.5vh] xl:mb-[2vh] xl:text-[0.95rem] ">
        {props.text}
      </p>
      <Link to='/recipes' className="hover:bg-[#370E00] hover:text-[#F3F6F1] border-[#370E00] border-solid border-[1px] rounded-[8px] bg-[#F3F6F1] py-[0.7vh] px-[5%] text-[1rem] font-bold font-IBM text-[#370E00] leading-[120%] ssm:text-[0.75rem] md:py-[0.7vh] sm:text-[1rem] sm:py-[1vh] md:text-[0.8rem]  xl:text-[1rem]">Read More</Link>
    </div>
  );
};
export default FollowDescription;
