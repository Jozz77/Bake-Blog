export default function PostsComment() {
  return (
    <div className="py-[3vh]">
      <p className="text-[#370E00] font-normal text-[1.3rem] leading-[120%] mb-[3vh] ">Comments</p>
      <hr className="border-y-[0.5px] border-solid border-[#370E00]" />
      <textarea
        name=""
        className="w-full bg-transparent px-[1%] py-[1vh] text-[#370E00] placeholder:text-[#370E00] font-normal text-[1rem] leading-[120%] my-[3vh] outline-none border-[0.5px] border-solid border-[#370E00] "
        placeholder="Write a comment..."
        cols="10"
        rows="6"
      ></textarea>
    </div>  
  );
}
