import { Link } from "react-router-dom";

const FollowDescription = (props) => {
  return (
    <div className=" bg-[#B5C7A5] absolute top-0 left-0 bottom-0 right-0 py-[2vh] px-[5%]">
      <h1 className="text-[1.3rem] text-[#A62B00] leading-[120%] ">{props.title}</h1>
      <p className="text-[0.9rem] font-IBM text-[#370E00] leading-[120%] pt-[2vh] mb-[2vh]">
        {props.text}
      </p>
      <Link to='' className="hover:bg-[#370E00] hover:text-[#F3F6F1] border-[#370E00] border-solid border-[1px] rounded-[8px] bg-[#F3F6F1] py-[1vh] px-[5%]  text-[1rem] font-bold font-IBM text-[#370E00] leading-[120%]">Read More</Link>
    </div>
  );
};
export default FollowDescription;
