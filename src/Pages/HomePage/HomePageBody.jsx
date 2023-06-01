/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import "./HomePage.css";
import FoodCard from "../../Components/FoodCard/FoodCard";
import FollowMe from "../../Components/FollowMe/FollowMe";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import SugarGirl from "./Assets/SugarGirl.png";
import CardHero from "./Assets/CardHero.png";
import CardHero2 from "./Assets/CardHero2.png";
import CardHero3 from "./Assets/CardHero3.png";
import CardHero4 from "./Assets/CardHero4.png";

export default function HomePageBody() {
  return (
    <div className="">
      <section className="px-[5%] flex justify-between items-center mt-[11vh] md:mt-[13vh] lg:mt-[15vh] ">
        <div className="Life-Hero relative py-[5vh] md:py-[8vh] w-[65%] lg:py-[10vh] xl:py-[13vh] ">
          <div>
            <div className="Life-Gives">
              <h2 className="font-semibold text-center text-[#FFFFFF] px-[7%] text-[2rem] leading-[130%] lg:leading-[130%] md:text-[2.6rem] lg:text-[3.4rem] xl:text-[3.8rem]">
                When Life Gives You Flour and Butter, You Better Bake
              </h2>
              <Link to="/recipes">
                <button className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] text-[#370E00] font-normal text-[1rem] w-[30%] mt-[3vh] mx-[35%] leading-[24px] bg-[#F3F6F1] py-[1vh] md:text-[1.3rem] lg:mt-[5vh]">
                  All Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>

        <FoodCard 
            img={CardHero}
            title='Bagels'
            text='Bagels are a type of bread product that is boiled before it...'
           />
      </section>
      <section className="px-[5%] mt-[1vh] lg:mt-[2vh] xl:mt-[4vh]">
        <div className="flex justify-center py-[1.5vh] gap-[2%] md:py-[2vh] ">
          <p className="text-[#370E00] font-normal text-[1.7rem] leading-[150%] md:text-[2rem] lg:text-[2.6rem] xl:text-[3rem]">
            Popular
          </p>
          <p className="text-[#370E00] font-normal text-[1.7rem] leading-[150%] md:text-[2rem] lg:text-[2.6rem] xl:text-[3rem]">
            Recipes
          </p>
        </div>
        <div className="flex justify-between">
          <FoodCard 
            img={CardHero2}
            title='The Perfect Key-Lime Pie'
            text='Key lime pie is a classic dessert that originated in the Florida...'
           />
           <FoodCard 
            img={CardHero3}
            title='Sourdough Bread'
            text='Sourdough bread is a type of bread made from a sourdough...'
           />
            <FoodCard 
            img={CardHero4}
            title='Pizza crust'
            text=' Pizza crust can be made using a sourdough starter or a pizza...'
           />
        </div>
      </section>

      <section className="sugar-container px-[5%] flex relative py-[5vh]">
        <div className="sugar w-[50%] mr-[-5%] my-[1.5%] py-[1.5vh] bg-[#F3F6F1] z-[1] md:my-[3%] md:py-[2vh] lg:my-[3%] xl:py-[6vh]">
          <h2 className="text-[#A62B00] pb-[0.5vh] font-normal text-[1.2rem] leading-[120%] w-[85%] md:w-[80%] md:text-[1.5rem] lg:w-[90%] lg:pb-[1vh] lg:text-[2.1rem] xl:w-[70%] xl:text-[2.6rem] ">
            Sugar, Spice and Everything Nice
          </h2>
          <h4 className="text-[#370E00] font-IBM font-normal pb-[0.5vh] text-[0.95rem] leading-[130%] md:text-[1.1rem] lg:pb-[1.5vh] lg:text-[1.4rem] xl:text-[1.7rem]">
            Hello, I’m Marriet
          </h4>
          <p className="text-[#370E00] font-IBM font-normal text-[0.75rem] leading-[130%] pr-[5%] mb-[1.5vh] md:text-[0.8rem] lg:mb-[3vh] lg:text-[1.1rem] xl:text-[1.2rem]">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread...
          </p>
          <Link
            to=""
            className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] text-[#370E00] font-IBM font-bold text-[0.75rem] border-solid border-[#000000] border-[0.5px] py-[0.5vh] px-[5%] leading-[130%] md:text-[0.85rem] lg:py-[1vh] lg:text-[1.1rem]"
          >
            About Me
          </Link>
        </div>
        <div className="sugarImg w-[50%] ">
          <img className="w-full" src={SugarGirl} alt="Girl with cakes" />
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
