import FollowMe from "../../Components/FollowMe/FollowMe";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import TypewriterSection from "../../Components/TypewriterSection/TypewriterSection";

export default function ContactBody() {
  return (
    <div className="mt-[10vh] sm:mt-[12vh] lg:mt-[15vh]">
      <section>
        <TypewriterSection FirstText="C" SecondText="ontact Me" />

        <div className="px-[5%] pt-[2vh] md:px-[10%] lg:px-[15%]">
          <h1 className="text-center font-normal text-[1.8rem] text-[#370E00] leading-[150%] px-[5%] sm:px-[10%] lg:text-[2rem] lg:px-[20%]  ">Have Comments, Questions or Business Proposals?</h1>
          <form action="" className="flex flex-wrap gap-x-[2%] gap-y-[3vh] font-IBM pt-[3vh] lg:pt-[6vh]">
            <div className="w-[100%] text-[1.2rem] text-[#370E00] leading-[130%] sm:w-[49%]">
              <label htmlFor="firstname">First Name</label>
              <br />
              <input type="text" name="firstname" className="mt-[1vh] border-b-[#370E00] border-b-[1px] border-b-solid bg-transparent outline-none w-full " />
            </div>
            
            <div className="w-[100%] text-[1.2rem] text-[#370E00] leading-[130% sm:w-[49%]">
              <label htmlFor="lastname">Last Name</label>
              <br />
              <input type="text" name="lastname" className="mt-[1vh] border-b-[#370E00] border-b-[1px] border-b-solid bg-transparent outline-none w-full " />
            </div>
            <div className="w-[100%] text-[1.2rem] text-[#370E00] leading-[130% sm:w-[49%]">
              <label htmlFor="email">Email*</label>
              <br />
              <input type="text" name="email" required className="mt-[1vh] border-b-[#370E00] border-b-[1px] border-b-solid bg-transparent outline-none w-full " />
            </div>
            <div className="w-[100%] text-[1.2rem] text-[#370E00] leading-[130% sm:w-[49%]">
              <label htmlFor="subject">Subject</label>
              <br />
              <input type="text" name="subject" className="mt-[1vh] border-b-[#370E00] border-b-[1px] border-b-solid bg-transparent outline-none w-full " />
            </div>

            <textarea name="" id="" cols="30" rows="10" className="resize-none w-full mt-[1vh] pt-[2vh] px-[2%] text-[1.2rem] text-[#370E00] leading-[130%] border-[#370E00] border-[1px] border-solid bg-transparent outline-none placeholder:text-[1.2rem] placeholder:text-[#370E00] " placeholder="Write a comment..."></textarea>
            <div className="flex justify-end w-full">
              <button className="py-[1vh] hover:bg-[#B5C7A5] hover:border-[#B5C7A5]  px-[2%] text-right rounded-[8px] font-bold   text-[1.1rem] text-[#370E00] border-[#370E00] border-[1px] border-solid bg-transparent ">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <FollowMe />
      </section>

      <section>
        <SomethingOven />
      </section>
    </div>
  );
}
