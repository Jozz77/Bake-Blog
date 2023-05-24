import { useState } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import TypewriterSection from "../../Components/TypewriterSection/TypewriterSection";
import { AiOutlineSearch } from 'react-icons/ai';

export default function RecipesBody() {
    const [toogle, setToggle] = useState(1)

    const toogleTab = (index) => {
        setToggle(index)
    }

  return (
    <div className="mt-[15vh]">
      <section>
        <TypewriterSection FirstText="Al" SecondText="l My Recipes" />
      </section>

      <section className="flex justify-between items-center px-[5%] my-[5vh] ">
        <div className="flex gap-[3%] w-[70%]">
            <button className={toogle === 1 ? "text-[#A62B00] font-normal text-[1.7rem] leading-[120%] " : "text-[#370E00] font-normal text-[1.7rem] leading-[120%] "} onClick={() => toogleTab(1)}>All Posts</button>
            <button className={toogle === 2 ? "text-[#A62B00] font-normal text-[1.7rem] leading-[120%] " : "text-[#370E00] font-normal text-[1.7rem] leading-[120%] "} onClick={() => toogleTab(2)}>Popular</button>
            <button className={toogle === 3 ? "text-[#A62B00] font-normal text-[1.7rem] leading-[120%] " : "text-[#370E00] font-normal text-[1.7rem] leading-[120%] "} onClick={() => toogleTab(3)}>Recent</button>
            <button className={toogle === 4 ? "text-[#A62B00] font-normal text-[1.7rem] leading-[120%] " : "text-[#370E00] font-normal text-[1.7rem] leading-[120%] "} onClick={() => toogleTab(4)}>Sweet</button>
            <button className={toogle === 5 ? "text-[#A62B00] font-normal text-[1.7rem] leading-[120%] " : "text-[#370E00] font-normal text-[1.7rem] leading-[120%] "} onClick={() => toogleTab(5)}>Savory</button>
        </div>
        <div>
            <AiOutlineSearch className="w-full" />
        </div>
      </section>

      {/* switch section */}
      <section className="px-[5%] ">
        {/* All posts section */}
        <div className={ toogle === 1 ? "flex flex-wrap gap-x-[3%] gap-y-[5vh] " : 'hidden'}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </div>

        {/* Popular section */}
        <div className={ toogle === 2 ? "flex flex-wrap gap-x-[3%] gap-y-[5vh] " : 'hidden'}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
        </div>

        {/* Recent section */}
        <div className={ toogle === 3 ? "flex flex-wrap gap-x-[3%] gap-y-[5vh] " : 'hidden'}>
            <FoodCard />
            <FoodCard />
            
        </div>

        {/* Sweet section */}
        <div className={ toogle === 4 ? "flex flex-wrap gap-x-[3%] gap-y-[5vh] " : 'hidden'}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
           
        </div>

        {/* Savory section */}
        <div className={ toogle === 5 ? "flex flex-wrap gap-x-[3%] gap-y-[5vh] " : 'hidden'}>
            <FoodCard />
            
        </div>
      </section>

      <section>
        <SomethingOven />
      </section>
    </div>
  );
}
