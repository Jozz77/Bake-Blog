import { useState } from "react";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import { FiChevronDown } from "react-icons/fi";
import TypewriterSection from "../../Components/TypewriterSection/TypewriterSection";
import FoodPostsCard from "../../Components/FoodPostsCard/FoodPostsCard";
import First1 from "./Assets/First1.png";
import First2 from "./Assets/First2.png";
import First4 from "./Assets/First4.png";
import First5 from "./Assets/First5.png";
import First6 from "./Assets/First6.png";
import First7 from "./Assets/First7.png";
import "./Recipes.css";
import RecipeSearch from "./RecipeSearch";

export default function RecipesBody() {
  const [toogle, setToggle] = useState(1);

  const toogleTab = (index) => {
    setToggle(index);
  };

  // mobile recipes header
  const [tog, setTog] = useState(true);

  function handleClick() {
    setTog((tog) => !tog);
  }
  let checkState = tog
    ? "font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00]"
    : "font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00]";
  let checkStates = tog
    ? "hidden"
    : "repMenu absolute px-[5%] bg-[#DCE7D2] top-[100%] right-0 left-0";

  return (
    <div className="mt-[10vh] md:mt-[11vh] lg:mt-[13vh] xl:mt-[15vh]">
      <section>
        <TypewriterSection FirstText="Al" SecondText="l My Recipes" />
      </section>

      <section className="hidden sm:flex justify-center items-center px-[5%] my-[3vh] lg:my-[4vh] xl:my-[5vh] ">
        <div className="flex justify-between w-[100%] font-normal text-[1rem] leading-[120%] ssm:text-[1.3rem] sm:text-[1.5rem] sm:w-[90%] md:w-[70%] sm:pb-[3vh] xl:text-[1.7rem] ">
          <button
            className={toogle === 1 ? "text-[#A62B00]  " : "text-[#370E00]  "}
            onClick={() => toogleTab(1)}
          >
            All Posts
          </button>
          <button
            className={toogle === 2 ? "text-[#A62B00]  " : "text-[#370E00]  "}
            onClick={() => toogleTab(2)}
          >
            Popular
          </button>
          <button
            id="recent"
            className={toogle === 3 ? "text-[#A62B00]  " : "text-[#370E00]  "}
            onClick={() => toogleTab(3)}
          >
            Recent
          </button>
          <button
            className={toogle === 4 ? "text-[#A62B00]  " : "text-[#370E00]  "}
            onClick={() => toogleTab(4)}
          >
            Sweet
          </button>
          <button
            className={toogle === 5 ? "text-[#A62B00]  " : "text-[#370E00]  "}
            onClick={() => toogleTab(5)}
          >
            Savory
          </button>
        </div>
      </section>

      {/* switch section */}
      <section className=" pb-[5vh] ">
        {/* All posts section */}
        <div className={toogle === 1 ? "block " : "hidden"}>
          {/* mobile recipes header section */}
          <section className="block mb-[2vh] sm:hidden">
            <div className="px-[5%] py-[1vh] flex justify-between items-center">
              <h3 className="font-normal text-[1.2rem] ssm:text-[1.5rem] text-[#370E00] ">
                Recipes
              </h3>
              <RecipeSearch />
            </div>
            <div className="px-[5%] relative z-[8] bg-[#DCE7D2] py-[1vh] flex justify-between items-center">
              <h3
                onClick={() => toogleTab(1)}
                className="font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00] "
              >
                All Post
              </h3>
              <FiChevronDown
                onClick={() => {
                  handleClick();
                }}
                className={`${checkState}`}
              />
              <div
                onClick={() => {
                  handleClick();
                }}
                className={`${checkStates}`}
              >
                <h3
                  onClick={() => toogleTab(2)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mt-[1vh] mb-[2vh] text-[#370E00] "
                >
                  Popular
                </h3>
                <h3
                  onClick={() => toogleTab(3)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Recent
                </h3>
                <h3
                  onClick={() => toogleTab(4)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Sweet
                </h3>
                <h3
                  onClick={() => toogleTab(5)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Savor
                </h3>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap justify-between px-[5%] gap-y-[0] sm:gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh]">
            <FoodPostsCard
              img={First1}
              hoverImg={First5}
              link="/posts1"
              title="Tasty Cake"
              text=" Bake is a beloved dessert that is enjoyed by people all over the world. ca..."
            />
            <FoodPostsCard
              img={First2}
              link="/posts2"
              hoverImg={First6}
              title="Artisan Bread"
              text=" Artisan bread is a type of bread that is made using traditional techniques..."
            />
            <FoodPostsCard
              img={First4}
              link="/posts3"
              hoverImg={First7}
              title="Crisp Churros"
              text="Crisp churros are a delicious fried pastry that originated in Spain but is ..."
            />
            <FoodPostsCard
              img={First5}
              hoverImg={First2}
              link="/posts1"
              title="Chocolate Cookie"
              text="Chocolate cookies are a delicious and indulgent treat that are loveds by th..."
            />
            <FoodPostsCard
              img={First6}
              hoverImg={First1}
              link="/posts2"
              title="PiePeach & Cream"
              text="Peach and cream pie is a classic dessert that is perfect for summertime and ..."
            />
            <FoodPostsCard
              img={First7}
              hoverImg={First4}
              link="/posts3"
              title="Pizza crust"
              text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
            />
          </div>
        </div>

        {/* Popular section */}
        <div id="popular" className={toogle === 2 ? "block " : "hidden"}>
          {/* mobile recipes header section */}
          <section className="block mb-[2vh] sm:hidden">
            <div className="px-[5%] py-[1vh] flex justify-between items-center">
              <h3 className="font-normal text-[1.2rem] ssm:text-[1.5rem] text-[#370E00] ">
                Recipes
              </h3>
              <RecipeSearch />
            </div>
            <div className="px-[5%] relative z-[8] bg-[#DCE7D2] py-[1vh] flex justify-between items-center">
              <h3
                onClick={() => toogleTab(2)}
                className="font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00] "
              >
                Popular
              </h3>
              <FiChevronDown
                onClick={() => {
                  handleClick();
                }}
                className={`${checkState}`}
              />
              <div
                onClick={() => {
                  handleClick();
                }}
                className={`${checkStates}`}
              >
                <h3
                  onClick={() => toogleTab(1)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mt-[1vh] mb-[2vh] text-[#370E00] "
                >
                  All Post
                </h3>
                <h3
                  onClick={() => toogleTab(3)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Recent
                </h3>
                <h3
                  onClick={() => toogleTab(4)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Sweet
                </h3>
                <h3
                  onClick={() => toogleTab(5)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Savor
                </h3>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap px-[5%] justify-between gap-y-[0] sm:gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh]">
            <FoodPostsCard
              img={First1}
              hoverImg={First5}
              link="/posts2"
              title="Easiest & Tasty Cake"
              text=" Bake is a beloved dessert that is enjoyed by people all over the world. cake is a..."
            />
            <FoodPostsCard
              img={First6}
              hoverImg={First2}
              link="/posts1"
              title="PiePeach & Cream"
              text="Peach and cream pie is a classic dessert that is perfect for summertime...."
            />
            <FoodPostsCard
              img={First7}
              hoverImg={First4}
              link="/posts3"
              title="Pizza crust"
              text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
            />
          </div>
        </div>

        {/* Recent section */}
        <div id="recent" className={toogle === 3 ? "block " : "hidden"}>
          {/* mobile recipes header section */}
          <section className="block mb-[2vh] sm:hidden">
            <div className="px-[5%] py-[1vh] flex justify-between items-center">
              <h3 className="font-normal text-[1.2rem] ssm:text-[1.5rem] text-[#370E00] ">
                Recipes
              </h3>
              <RecipeSearch />
            </div>
            <div className="px-[5%] relative z-[8] bg-[#DCE7D2] py-[1vh] flex justify-between items-center">
              <h3
                onClick={() => toogleTab(3)}
                className="font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00] "
              >
                Recent
              </h3>
              <FiChevronDown
                onClick={() => {
                  handleClick();
                }}
                className={`${checkState}`}
              />
              <div
                onClick={() => {
                  handleClick();
                }}
                className={`${checkStates}`}
              >
                <h3
                  onClick={() => toogleTab(1)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mt-[1vh] mb-[2vh] text-[#370E00] "
                >
                  All Post
                </h3>
                <h3
                  onClick={() => toogleTab(2)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Popular
                </h3>
                <h3
                  onClick={() => toogleTab(4)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Sweet
                </h3>
                <h3
                  onClick={() => toogleTab(5)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Savor
                </h3>
              </div>
            </div>
          </section>
          <div className="flex flex-wrap px-[5%] justify-between gap-y-[0] sm:gap-y-[2vh] sm:justify-start lg:gap-x-[3%] lg:gap-y-[5vh]">
            <FoodPostsCard
              img={First6}
              hoverImg={First1}
              link="/posts3"
              title="PiePeach & Cream"
              text="Peach and cream pie is a classic dessert that is perfect for summertime...."
            />
            <FoodPostsCard
              img={First4}
              hoverImg={First7}
              link="/posts2"
              title="Crisp Churros"
              text="Crisp churros are a delicious fried pastry that originated in Spain but have become a popular... "
            />
          </div>
        </div>

        {/* Sweet section */}
        <div id="sweet" className={toogle === 4 ? "block " : "hidden"}>
          {/* mobile recipes header section */}
          <section className="block mb-[2vh] sm:hidden">
            <div className="px-[5%] py-[1vh] flex justify-between items-center">
              <h3 className="font-normal text-[1.2rem] ssm:text-[1.5rem] text-[#370E00] ">
                Recipes
              </h3>
              <RecipeSearch />
            </div>
            <div className="px-[5%] relative z-[8] bg-[#DCE7D2] py-[1vh] flex justify-between items-center">
              <h3
                onClick={() => toogleTab(4)}
                className="font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00] "
              >
                Sweet
              </h3>
              <FiChevronDown
                onClick={() => {
                  handleClick();
                }}
                className={`${checkState}`}
              />
              <div
                onClick={() => {
                  handleClick();
                }}
                className={`${checkStates}`}
              >
                <h3
                  onClick={() => toogleTab(1)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mt-[1vh] mb-[2vh] text-[#370E00] "
                >
                  All Post
                </h3>
                <h3
                  onClick={() => toogleTab(2)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Popular
                </h3>
                <h3
                  onClick={() => toogleTab(3)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Recent
                </h3>
                <h3
                  onClick={() => toogleTab(5)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Savor
                </h3>
              </div>
            </div>
          </section>
          <div className="flex flex-wrap px-[5%] justify-between gap-y-[0] sm:gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh]">
            <FoodPostsCard
              img={First7}
              hoverImg={First4}
              link="/posts1"
              title="Pizza crust"
              text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
            />
            <FoodPostsCard
              img={First1}
              hoverImg={First5}
              link="/posts2"
              title="Easiest & Tasty Cake"
              text=" Bake is a beloved dessert that is enjoyed by people all over the world. cake is a staple..."
            />
            <FoodPostsCard
              img={First2}
              hoverImg={First6}
              link="/posts3"
              title="Artisan Bread"
              text=" Artisan bread is a type of bread that is made using traditional techniques..."
            />
            <FoodPostsCard
              img={First6}
              hoverImg={First1}
              link="/posts2"
              title="PiePeach & Cream"
              text="Peach and cream pie is a classic dessert that is perfect for summertime...."
            />
          </div>
        </div>

        {/* Savory section */}
        <div id="savory" className={toogle === 5 ? "block " : "hidden"}>
          {/* mobile recipes header section */}
          <section className="block mb-[2vh] sm:hidden">
            <div className="px-[5%] py-[1vh] flex justify-between items-center">
              <h3 className="font-normal text-[1.2rem] ssm:text-[1.5rem] text-[#370E00] ">
                Recipes
              </h3>
              <RecipeSearch />
            </div>
            <div className="px-[5%] relative z-[8] bg-[#DCE7D2] py-[1vh] flex justify-between items-center">
              <h3
                onClick={() => toogleTab(5)}
                className="font-normal text-[1rem] ssm:text-[1.3rem] text-[#370E00] "
              >
                Savor
              </h3>
              <FiChevronDown
                onClick={() => {
                  handleClick();
                }}
                className={`${checkState}`}
              />
              <div
                onClick={() => {
                  handleClick();
                }}
                className={`${checkStates}`}
              >
                <h3
                  onClick={() => toogleTab(1)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mt-[1vh] mb-[2vh] text-[#370E00] "
                >
                  All Post
                </h3>
                <h3
                  onClick={() => toogleTab(2)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Popular
                </h3>
                <h3
                  onClick={() => toogleTab(3)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Recent
                </h3>
                <h3
                  onClick={() => toogleTab(4)}
                  className="font-normal text-[1rem] ssm:text-[1.3rem] mb-[2vh] text-[#370E00] "
                >
                  Sweet
                </h3>
              </div>
            </div>
          </section>
          <div className="flex flex-wrap px-[5%] justify-between gap-y-[0] sm:gap-y-[2vh] lg:gap-x-[3%] lg:gap-y-[5vh]">
            <FoodPostsCard
              img={First7}
              hoverImg={First4}
              link="/posts3"
              title="Pizza crust"
              text=" Pizza crust can be made using a sourdough starter or a pizza that is perfect..."
            />
          </div>
        </div>
      </section>

      <section>
        <SomethingOven />
      </section>
    </div>
  );
}
