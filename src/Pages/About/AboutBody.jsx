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

      <section className="relative flex hover:flex-row-reverse items-center py-[5vh]">
        <div className="w-[50%]">
          <img src={SugarGirl} className=" w-full" alt="SugarGirl" />
        </div>

        <div className="bg-[#F3F6F1] w-[50%] ml-[-5%] hover:mr-[-5%] py-[5vh] px-[5%] ">
          <h2 className="text-[#A62B00] font-IBM font-normal text-[2.9rem] leading-[120%] mb-[2vh]">
            Hello, I’m Joygirl
          </h2>
          <p className="text-[#370E00] font-IBM font-normal text-[1.2rem] leading-[150%]">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread.
          </p>
          <p className="text-[#370E00] font-IBM font-normal text-[1.2rem] leading-[150%] mt-[1vh]">
            I also enjoys sharing my knowledge and passion for baking with
            others. I regularly hosts baking classes for both kids and adults,
            teaching them how to make everything from bread to macarons. For me,
            baking is more than just a job – it's a way of life. I belief that
            food has the power to bring people together and create memories that
            will last a lifetime.
          </p>
        </div>
      </section>

      <section className="px-[5%] py-[3vh]">
        <h2 className="text-[#A62B00] font-normal text-[2.6rem] leading-[120%] mb-[2vh]">
          Things I Do{" "}
        </h2>
        <div>
          <div className="flex justify-between text-[#A62B00]">
            <div className="w-[31.5%]">
              <h4 className="text-[#A62B00] font-IBM font-normal text-[1.6rem] leading-[120%] mb-[1vh]">
                Culinary Content
              </h4>
              <p className="text-[#A62B00] font-IBM font-normal text-[1.2rem] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Et in aliquam
                consectetur ornare faucibus. Proin nisi ac pharetra quis odio
                orci massa. Diam sodales nibh pellentesque. Proin nisi ac
                pharetra quis odio orci massa. Diam sodales nibh pellentesque.
              </p>
            </div>
            <div className="w-[31.5%]">
              <h4 className="text-[#A62B00] font-IBM font-normal text-[1.6rem] leading-[120%] mb-[1vh]">
                Online Classes
              </h4>
              <p className="text-[#A62B00] font-IBM font-normal text-[1.2rem] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Et in aliquam
                consectetur ornare faucibus. Proin nisi ac pharetra quis odio
                orci massa. Diam sodales nibh pellentesque. Proin nisi ac
                pharetra quis odio orci massa. Diam sodales nibh pellentesque.
              </p>
            </div>
            <div className="w-[31.5%]">
              <h4 className="text-[#A62B00] font-IBM font-normal text-[1.6rem] leading-[120%] mb-[1vh]">
                Social Media Advertsing
              </h4>
              <p className="text-[#A62B00] font-IBM font-normal text-[1.2rem] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Et in aliquam
                consectetur ornare faucibus. Proin nisi ac pharetra quis odio
                orci massa. Diam sodales nibh pellentesque. Proin nisi ac
                pharetra quis odio orci massa. Diam sodales nibh pellentesque.
              </p>
            </div>
          </div>
          <hr className=" border-solid border-[0.5px] my-[2vh]" />
          <div className="text-right">
            <button className=" border-solid border-[0.5px] border-[#000000] px-[2%] py-[0.5vh] text-[#370E00] font-IBM font-normal text-[1.2rem] leading-[150%] ">
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
