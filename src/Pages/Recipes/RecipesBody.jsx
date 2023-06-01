import { useState } from "react";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import TypewriterSection from "../../Components/TypewriterSection/TypewriterSection";
import { AiOutlineSearch } from "react-icons/ai";
import FoodPostsCard from "../../Components/FoodPostsCard/FoodPostsCard";
import CardHero4 from "./Assets/CardHero4.png";
import CardHero3 from "./Assets/CardHero3.png";
import First1 from './Assets/First1.png'
import First2 from './Assets/First2.png'
import First3 from './Assets/First3.png'
import First4 from './Assets/First4.png'
import First5 from './Assets/First5.png'
import First6 from './Assets/First6.png'
import First7 from './Assets/First7.png'
import Image1 from './Assets/Image1.png'
import Image2 from './Assets/Image2.png'
import Image3 from './Assets/Image3.png'
import Image4 from './Assets/Image4.png'
import Image5 from './Assets/Image5.png'
import Image6 from './Assets/Image6.png'
import Image7 from './Assets/Image7.png'

export default function RecipesBody() {
  const [toogle, setToggle] = useState(1);

  const toogleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="mt-[8vh] md:mt-[11vh] lg:mt-[13vh] xl:mt-[15vh]">
      <section>
        <TypewriterSection FirstText="Al" SecondText="l My Recipes" />
      </section>

      <section className="flex justify-center items-center px-[5%] my-[3vh] lg:my-[4vh] xl:my-[5vh] ">
        <div className="flex justify-between w-[90%] font-normal text-[1.5rem] leading-[120%] md:w-[70%]  xl:text-[1.7rem] ">
          <button
            className={
              toogle === 1
                ? "text-[#A62B00]  "
                : "text-[#370E00]  "
            }
            onClick={() => toogleTab(1)}
          >
            All Posts
          </button>
          <button
            className={
              toogle === 2
                ? "text-[#A62B00]  "
                : "text-[#370E00]  "
            }
            onClick={() => toogleTab(2)}
          >
            Popular
          </button>
          <button
            className={
              toogle === 3
                ? "text-[#A62B00]  "
                : "text-[#370E00]  "
            }
            onClick={() => toogleTab(3)}
          >
            Recent
          </button>
          <button
            className={
              toogle === 4
                ? "text-[#A62B00]  "
                : "text-[#370E00]  "
            }
            onClick={() => toogleTab(4)}
          >
            Sweet
          </button>
          <button
            className={
              toogle === 5
                ? "text-[#A62B00]  "
                : "text-[#370E00]  "
            }
            onClick={() => toogleTab(5)}
          >
            Savory
          </button>
        </div>
      </section>

      {/* switch section */}
      <section className="px-[5%] ">
        {/* All posts section */}
        <div
          className={
            toogle === 1 ? "flex flex-wrap gap-x-[2%] gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh] " : "hidden"
          }
        >
           <FoodPostsCard
            img={First1}
            hoverImg={First5}
            title="Easiest & Tasty Cake"
            text=" Bake is a beloved dessert that is enjoyed by people all over the world. cake is a staple of..."
          />
           <FoodPostsCard
            img={First2}
            hoverImg={First6}
            title="Artisan Bread"
            text=" Artisan bread is a type of bread that is made using traditional techniques..."
          />
           {/* <FoodPostsCard
            img={First3}
            hoverImg={CardHero4}
            title="Pizza Rolls"
            text="Pizza rolls are a popular snack food that are loved by people of all ages. They consist of small, bite-sized rolls cheese, tomato sauce"
          /> */}
           <FoodPostsCard
            img={First4}
            hoverImg={First7}
            title="Crisp Churros"
            text="Crisp churros are a delicious fried pastry that originated in Spain but have become a popular... "
          />
           <FoodPostsCard
            img={First5}
            hoverImg={First2}
            title="Chocolate Cookie"
            text="Chocolate cookies are a delicious and indulgent treat that are loveds..."
          />
           <FoodPostsCard
            img={First6}
            hoverImg={First1}
            title="PiePeach & Cream"
            text="Peach and cream pie is a classic dessert that is perfect for summertime...."
          />
           <FoodPostsCard
            img={First7}
            hoverImg={First4}
            title="Pizza crust"
            text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
          />
        </div>

        {/* Popular section */}
        <div
          className={
            toogle === 2 ? "flex flex-wrap gap-x-[2%] gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh] " : "hidden"
          }
        >
          <FoodPostsCard
            img={First1}
            hoverImg={First5}
            title="Easiest & Tasty Cake"
            text=" Bake is a beloved dessert that is enjoyed by people all over the world. cake is a..."
          />
           <FoodPostsCard
            img={First6}
            hoverImg={First2}
            title="PiePeach & Cream"
            text="Peach and cream pie is a classic dessert that is perfect for summertime...."
          />
        <FoodPostsCard
            img={First7}
            hoverImg={First4}
            title="Pizza crust"
            text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
          />
        </div>

        {/* Recent section */}
        <div
          className={
            toogle === 3 ? "flex flex-wrap gap-x-[2%] gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh] " : "hidden"
          }
        >
           <FoodPostsCard
            img={First6}
            hoverImg={First1}
            title="PiePeach & Cream"
            text="Peach and cream pie is a classic dessert that is perfect for summertime...."
          />
           <FoodPostsCard
            img={First4}
            hoverImg={First7}
            title="Crisp Churros"
            text="Crisp churros are a delicious fried pastry that originated in Spain but have become a popular... "
          />
        </div>

        {/* Sweet section */}
        <div
          className={
            toogle === 4 ? "flex flex-wrap gap-x-[2%] gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh] " : "hidden"
          }
        >
           <FoodPostsCard
            img={First7}
            hoverImg={First4}
            title="Pizza crust"
            text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
          />
           <FoodPostsCard
            img={First1}
            hoverImg={First5}
            title="Easiest & Tasty Cake"
            text=" Bake is a beloved dessert that is enjoyed by people all over the world. cake is a staple..."
          />
           <FoodPostsCard
            img={First2}
            hoverImg={First6}
            title="Artisan Bread"
            text=" Artisan bread is a type of bread that is made using traditional techniques..."
          />
        <FoodPostsCard
            img={First6}
            hoverImg={First1}
            title="PiePeach & Cream"
            text="Peach and cream pie is a classic dessert that is perfect for summertime...."
          />
        </div>

        {/* Savory section */}
        <div
          className={
            toogle === 5 ? "flex flex-wrap gap-x-[2%] gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh] " : "hidden"
          }
        >
             <FoodPostsCard
            img={First7}
            hoverImg={First4}
            title="Pizza crust"
            text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
          />
        </div>
      </section>

      <section>
        <SomethingOven />
      </section>
    </div>
  );
}
