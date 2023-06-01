import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import TypewriterSection from "../../Components/TypewriterSection/TypewriterSection";
import SugarGirl from "./Assets/SugarGirl.png";


export default function AboutBody() {
  return (
    <div className="mt-[15vh]">
      <section>
        <TypewriterSection
            FirstText='A'
            SecondText="bout Me"
         />
      </section>

      <section className="relative flex items-center py-[2vh] xl:py-[4vh]">
        <div className="w-[50%]">
          <img src={SugarGirl} className=" w-full" alt="SugarGirl" />
        </div>

        <div className="bg-[#F3F6F1] w-[55%] ml-[-2%] py-[1vh] pl-[2%] pr-[5%] md:ml-[-3%] md:py-[2vh] md:pl-[3%] lg:ml-[-5%] lg:pr-[5%] lg:pl-[5%] lg:w-[50%] xl:py-[5vh] ">
          <h2 className="text-[#A62B00] font-IBM font-medium text-[1.3rem] leading-[120%] mb-[0.5vh] md:mb-[1vh] md:text-[1.7rem] lg:font-normal lg:text-[2.3rem] xl:mb-[2vh] xl:text-[2.9rem]">
            Hello, I’m Roberta
          </h2>
          <p className="text-[#370E00] font-IBM font-normal text-[0.7rem] leading-[150%] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] ">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread.
          </p>
          <p className="text-[#370E00] font-IBM font-normal text-[0.7rem] leading-[150%] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]  mt-[0.5vh] md:mt-[1vh]">
            I also enjoys sharing my knowledge and passion for baking with
            others. I regularly hosts baking classes for both kids and adults,
            teaching them how to make everything from bread to macarons. For me,
            baking is more than just a job – it's a way of life. I belief that
            food has the power to bring people tog  ether and create memories that
            will last a lifetime.
          </p>
        </div>
      </section>

      <section className="px-[5%] py-[3vh]">
        <h2 className="text-[#A62B00] font-normal text-[1.9rem] leading-[120%] mb-[2vh] md:text-[2rem]  lg:text-[2.3rem] xl:text-[2.6rem] ">
          Things I Do{" "}
        </h2>
        <div>
          <div className="flex justify-between text-[#A62B00]">
            <div className="w-[31.5%]">
              <h4 className="text-[#A62B00] font-IBM font-normal text-[1rem] leading-[120%] mb-[1vh] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
                Culinary Content
              </h4>
              <p className="text-[#A62B00] font-IBM font-normal text-[0.8rem] leading-[150%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                Lorem ipsum dolor sit amet consectetur. Et in aliquam
                consectetur ornare faucibus. Proin nisi ac pharetra quis odio
                orci massa. Diam sodales nibh pellentesque. Proin nisi ac
                pharetra quis odio orci massa. Diam sodales nibh pellentesque.
              </p>
            </div>
            <div className="w-[31.5%]">
              <h4 className="text-[#A62B00] font-IBM font-normal text-[1rem] leading-[120%] mb-[1vh] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
                Online Classes
              </h4>
              <p className="text-[#A62B00] font-IBM font-normal text-[0.8rem] leading-[150%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                Lorem ipsum dolor sit amet consectetur. Et in aliquam
                consectetur ornare faucibus. Proin nisi ac pharetra quis odio
                orci massa. Diam sodales nibh pellentesque. Proin nisi ac
                pharetra quis odio orci massa. Diam sodales nibh pellentesque.
              </p>
            </div>
            <div className="w-[31.5%]">
              <h4 className="text-[#A62B00] font-IBM font-normal text-[1rem] leading-[120%] mb-[1vh] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
                Social Media Advertsing
              </h4>
              <p className="text-[#A62B00] font-IBM font-normal text-[0.8rem] leading-[150%] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                Lorem ipsum dolor sit amet consectetur. Et in aliquam
                consectetur ornare faucibus. Proin nisi ac pharetra quis odio
                orci massa. Diam sodales nibh pellentesque. Proin nisi ac
                pharetra quis odio orci massa. Diam sodales nibh pellentesque.
              </p>
            </div>
          </div>
          <hr className=" border-solid border-[0.5px] my-[2vh] lg:my-[3vh]"  />
          <div className="text-right">
            <button className=" border-solid border-[0.5px] border-[#000000] rounded-[8px] px-[2%] py-[0.7vh] text-[#370E00] font-IBM font-bold text-[0.8rem] leading-[150%] md:text-[0.9rem]  lg:py-[1vh] lg:text-[1rem]  xl:text-[1.1rem]">
              Let’s Work Together
            </button>
          </div>
        </div>
      </section>

      <section>
        <SomethingOven />
      </section>
    </div>
  );
}
