import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import TypewriterSection from "../../Components/TypewriterSection/TypewriterSection";
import SugarGirl from "./Assets/SugarGirl.png";
import "./About.css";

export default function AboutBody() {
  return (
    <div className="mt-[10vh] sm:mt-[12vh] lg:mt-[15vh]">
      <section>
        <TypewriterSection FirstText="A" SecondText="bout Me" />
      </section>

      <section className="hidden sugar-container-about sm:flex relative items-center py-[2vh] xl:py-[4vh]">
        <div className="sugarImgAbout w-[50%]">
          <img src={SugarGirl} className=" w-full" alt="SugarGirl" />
        </div>

        <div className="sugarAbout bg-[#F3F6F1] w-[50%] absolute right-[5%] py-[1vh] pl-[5%] md:py-[1.5vh] lg:py-[5vh] ">
          <h2 className="text-[rgb(166,43,0)] font-IBM font-medium text-[1.3rem] leading-[120%] mb-[0.5vh] md:mb-[1vh] md:text-[1.7rem] lg:font-normal lg:text-[2.3rem] xl:mb-[2vh] xl:text-[2.9rem]">
            Hello, I’m Roberta
          </h2>
          <p className=" text-[#370E00] font-IBM font-normal text-[0.7rem] leading-[150%] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] ">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread.
          </p>
          <p className=" text-[#370E00] font-IBM font-normal text-[0.7rem] leading-[150%] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem] mt-[0.5vh] md:mt-[1vh]">
            I also enjoys sharing my knowledge and passion for baking with
            others. I regularly hosts baking classes for both kids and adults,
            teaching them how to make everything from bread to macarons. For me,
            baking is more than just a job – it's a way of life. I belief that
            food has the power to bring people tog ether and create memories
            that will last a lifetime.
          </p>
        </div>
      </section>

      {/* mobile sugargirl */}
      <section className="relative flex flex-col-reverse items-center py-[0vh] sm:hidden">
        <div className=" w-[100%]">
          <img src={SugarGirl} className=" w-full" alt="SugarGirl" />
        </div>

        <div className=" bg-[#F3F6F1] px-[5%] w-[100%] py-[1vh]">
          <h2 className="text-[#A62B00] pb-[1vh] pr-[5%] font-normal text-[1.4rem] leading-[120%] w-[95%] ssm:text-[1.6rem] ">
            Sugar, Spice and Everything Nice
          </h2>
          <h2 className="text-[rgb(166,43,0)] font-IBM font-medium text-[1rem] leading-[120%] mb-[1vh] ssm:text-[1.3rem]">
            Hello, I’m Roberta
          </h2>
          <p className=" text-[#370E00] font-IBM font-normal text-[0.8rem] ssm:text-[1rem] leading-[150%] ">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread.
          </p>
          <p className="py-[1vh] text-[#370E00] font-IBM font-normal text-[0.8rem] ssm:text-[1rem] leading-[150%] ">
            I also enjoys sharing my knowledge and passion for baking with
            others. I regularly hosts baking classes for both kids and adults,
            teaching them how to make everything from bread to macarons. For me,
            baking is more than just a job – it's a way of life. I belief that
            food has the power to bring people tog ether and create memories
            that will last a lifetime.
          </p>
        </div>
      </section>

      <section className="px-[5%] py-[3vh]">
        <h2 className="text-[#A62B00] font-normal text-[1.5rem] leading-[120%] mb-[1vh] ssm:mb-[2vh] ssm:text-[1.9rem] md:text-[2rem]  lg:text-[2.3rem] xl:text-[2.6rem] ">
          Things I Do{" "}
        </h2>

        <div className="content-container">
          <div className="content">
            <div className="flex flex-wrap justify-between text-[#A62B00]">
              <div className="w-[100%] pb-[1.5vh] sm:w-[31.5%]">
                <h4 className="text-[#A62B00] font-IBM font-normal text-[1rem] ssm:text-[1.3rem] leading-[120%] mb-[0.5vh] sm:text-[1rem] sm:mb-[1vh] md:text-[1.3] lg:text-[1.4rem] xl:text-[1.6rem]">
                  Culinary Content
                </h4>
                <p className="text-[#A62B00] font-IBM font-normal text-[0.8rem] ssm:text-[0.95rem] leading-[150%] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                  I explore the diverse world of culinary content. Here are some
                  of it; Classic recipes, international cuisine, healthy
                  cooking, baking, food history, culinary techniques, food
                  photography, food blogging, food science and culinary travel.
                </p>
              </div>
              <div className="w-[100%] pb-[1.5vh] sm:w-[31.5%]">
                <h4 className="text-[#A62B00] font-IBM font-normal text-[1rem] ssm:text-[1.3rem] leading-[120%] mb-[0.5vh] sm:text-[1rem] sm:mb-[1vh] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
                  Online Classes
                </h4>
                <p className="text-[#A62B00] font-IBM font-normal text-[0.8rem] ssm:text-[0.95rem] leading-[150%] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                  There are many online classes available on food that cater to
                  various interests and skill levels. Here is my specialization:
                  Cheese-making, baking, plant-based cooking , culinary
                  techniques, wine tasting , food science and food safety
                </p>
              </div>
              <div className="w-[100%] pb-[1.5vh] sm:w-[31.5%]">
                <h4 className="text-[#A62B00] font-IBM font-normal text-[1rem] ssm:text-[1.3rem] leading-[120%] mb-[0.5vh] sm:text-[1rem] sm:mb-[1vh] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
                  Social Media Advertsing
                </h4>
                <p className="text-[#A62B00] font-IBM font-normal text-[0.8rem] ssm:text-[0.95rem] leading-[150%] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                  With its wide reach and ability to target specific
                  demographics, social media advertising is a powerful tool for
                  businesses of all sizes. In this article, we'll explore the
                  world of social media advertising and how you can use it to
                  maximize your reach.
                </p>
              </div>
            </div>
          </div>
          <hr className=" border-solid border-[0.5px] my-[1vh] sm:my-[2vh] lg:my-[3vh]" />
          <div className="text-right">
            <button className=" border-solid border-[0.5px] border-[#000000] rounded-[8px] px-[2%] py-[0.7vh] text-[#370E00] font-IBM font-bold text-[0.7rem] leading-[150%] ssm:text-[0.8rem] md:text-[0.9rem]  lg:py-[1vh] lg:text-[1rem]  xl:text-[1.1rem]">
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
