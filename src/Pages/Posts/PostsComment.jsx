export default function PostsComment() {
  return (
    <div className="py-[2vh] sm:py-[3vh]">
      <p className="text-[#370E00] font-normal text-[1.1rem] leading-[120%] mb-[1.5vh] ssm:text-[1.2rem] sm:mb-[3vh] sm:text-[1.3rem] ">
        Comments
      </p>
      <hr className="border-y-[0.5px] border-solid border-[#370E00]" />
      <textarea
        name=""
        className="w-full resize-none bg-transparent px-[3%] py-[1vh] text-[#370E00] placeholder:text-[#370E00] font-normal text-[1rem] leading-[120%] my-[1.5vh] outline-none border-[0.5px] border-solid border-[#370E00] ssm:my-[3vh]  sm:px-[1%]"
        placeholder="Write a comment..."
        cols="10"
        rows="6"
      ></textarea>
      <div className="flex justify-end w-full">
        <button className="py-[0.7vh] hover:bg-[#B5C7A5] hover:border-[#B5C7A5]  px-[2%] text-right rounded-[8px] font-bold  text-[1rem] text-[#370E00] border-[#370E00] border-[1px] border-solid bg-transparent sm:py-[1vh] sm:text-[1.1rem]">
          Comment
        </button>
      </div>
    </div>
  );
}
