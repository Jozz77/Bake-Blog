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
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from "react";

const TEXTS = ['Popular', 'Common', 'Awesome', 'Delicious'];

export default function HomePageBody() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="">
      <section className="px-[0%] flex flex-wrap justify-between items-center mt-[11vh] sm:px-[5%] md:mt-[13vh] lg:mt-[15vh] ">
        <div className="Life-Hero relative py-[8vh] mb-[2vh] sm:y-[5vh] md:py-[8vh] w-[100%] sm:mb-[0] sm:w-[65%] lg:py-[10vh] xl:py-[13vh] ">
          <div>
            <div className="Life-Gives">
              <h2 className="font-semibold text-center text-[#FFFFFF] px-[5%] text-[1.8rem] leading-[130%] ssm:text-[2.5rem] sm:px-[7%] sm:text-[2rem]  lg:leading-[130%] md:text-[2.6rem] lg:text-[3.4rem] xl:text-[3.8rem]">
                When Life Gives You Flour and Butter, You Better Bake
              </h2>
              <Link to="/recipes">
                <button className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] rounded-[8px] text-[#370E00] font-normal text-[0.9rem] w-[30%] mt-[3vh] mx-[35%] leading-[24px] bg-[#F3F6F1] py-[1.5vh] ssm:text-[1rem] md:text-[1.3rem] lg:mt-[5vh]">
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
            link='/posts1'
           />

      </section>

      <section className="px-[5%] mt-[1vh] lg:mt-[2vh] xl:mt-[4vh]">
        <div className="flex justify-center py-[1.5vh] gap-[2%] md:py-[2vh] lg:py-[3vh] ">
          <p className="text-[#A62B00] overflow-hidden font-normal text-[1.7rem] leading-[150%] w-[40%] ssm:w-[30%] sm:w-[20%] md:text-[2rem] md:w-[20%] lg:w-[19%] xl:w-[18%] lg:text-[2.6rem] xl:text-[3rem]">
          <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </p>
          <p className="text-[#370E00] font-normal text-[1.7rem] leading-[150%] md:text-[2rem] lg:text-[2.6rem] xl:text-[3rem]">
            Recipes
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <FoodCard 
            img={CardHero2}
            title='The Perfect Key-Lime Pie'
            text='Key lime pie is a classic dessert that originated in the Florida...'
            link='/posts2'
           />
           <FoodCard 
            img={CardHero3}
            title='Sourdough Bread'
            text='Sourdough bread is a type of bread made from a sourdough...'
            link='/posts3'
           />
            <FoodCard 
            img={CardHero4}
            title='Pizza crust'
            text=' Pizza crust can be made using a sourdough starter or a pizza...'
            link='/posts1'
           />
        </div>
      </section>

      <section className="hidden sugar-container sm:flex px-[5%] relative py-[5vh]">
        <div className="sugar-text w-[45%] my-[1.5%] py-[1.5vh] bg-[#F3F6F1] absolute top-[12%] left-[5%] z-[1] lg:top-[10%] lg:py-[3vh]  xl:py-[5vh]">
          <h2 className="text-[#A62B00] pb-[0.5vh] font-normal text-[1.2rem] leading-[120%] w-[85%] md:w-[80%] sm:text-[1.3rem] md:text-[1.5rem] lg:w-[90%] lg:pb-[1vh] lg:text-[2.5rem] xl:w-[70%] xl:text-[2.8rem] ">
            Sugar, Spice and Everything Nice
          </h2>
          <h4 className="text-[#370E00] font-IBM font-normal pb-[0.5vh] text-[0.95rem] leading-[130%] sm:text-[1rem] md:text-[1.2rem] lg:pb-[1.5vh] lg:text-[1.5rem] xl:text-[1.8rem]">
            Hello, I’m Marriet
          </h4>
          <p className="text-[#370E00] font-IBM font-normal text-[0.75rem] leading-[130%] pr-[5%] mb-[1vh] sm:text-[0.8rem] md:text-[1rem] lg:mb-[3vh] lg:text-[1.1rem] xl:text-[1.4rem]">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread...
          </p>
          <Link
            to=""
            className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] rounded-[8px] text-[#370E00] font-IBM font-bold text-[0.75rem] border-solid border-[#000000] border-[0.5px] py-[0.5vh] px-[5%] leading-[130%] md:text-[0.8rem] lg:py-[1vh] lg:text-[1rem]"
          >
            About Me
          </Link>
        </div>
        <div className="sugarImg w-[55%] ml-[45%]">
          <img className="w-full" src={SugarGirl} alt="Girl with cakes" />
        </div>
      </section>

      {/* mobile sugargirl container */}
      <section className="block flex flex-wrap relative py-[2vh] sm:hidden">
        <div className="sugar w-[100%] px-[5%] mr-[-5%] my-[1.5%] pt-[0.5vh] pb-[2.5vh] bg-[#F3F6F1] z-[1] ">
          <h2 className="text-[#A62B00] pb-[1vh] pr-[5%] font-normal text-[1.5rem] leading-[120%] w-[85%]  ">
            Sugar, Spice and Everything Nice
          </h2>
          <h4 className="text-[#370E00] font-IBM font-normal pb-[0.5vh] text-[1.2rem] leading-[130%] ssm:text-[1.3rem]  ">
            Hello, I’m Marriet
          </h4>
          <p className="text-[#370E00] font-IBM font-normal text-[0.9rem] leading-[130%] pr-[5%] pb-[2vh] ssm:text-[1rem]">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread...
          </p>
          <Link
            to="/about"
            className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] rounded-[8px] text-[#370E00] font-IBM font-bold text-[0.75rem] border-solid border-[#000000] border-[0.5px] py-[0.7vh] px-[5%] leading-[130%] "
          >
            About Me
          </Link>
        </div>
        <div className="w-[100%] ">
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
