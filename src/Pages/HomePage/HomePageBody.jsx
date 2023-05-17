/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import "./HomePage.css";
import FoodCard from "../../Components/FoodCard/FoodCard";
import FollowMe from "../../Components/FollowMe/FollowMe";
import SomethingOven from "../../Components/SomethingOven/SomethingOven";
import SugarGirl from "./Assets/SugarGirl.png";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";



export default function HomePageBody() {
  return (
    <div className="">
      <section className="px-[5%] flex justify-between items-center mt-[15vh] ">
        <div className="Life-Hero py-[13vh] w-[65%]">
          <div>
            <h2 className="font-semibold text-center text-[#FFFFFF] px-[7%] text-[3.8rem] leading-[130%]">
              When Life Gives You Flour and Butter, You Better Bake
            </h2>
            <Link to="">
              <button className="text-[#370E00] font-normal text-[1.3rem] w-[30%] mt-[5vh] mx-[35%] leading-[24px] bg-[#F3F6F1]  py-[1.5vh] ">
                All Recipes
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[30%]">
          <FoodCard />
        </div>
      </section>
      <section className="px-[5%] mt-[4vh]">
        <div>
        {/* <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper> */}
        </div>

        <div className="flex justify-center py-[2vh] gap-[2%]">
          <p className="text-[#370E00] font-normal text-[3rem] leading-[150%]">
            Popular
          </p>
          <p className="text-[#370E00] font-normal text-[3rem] leading-[150%]">
            Recipes
          </p>
        </div>
        <div className="flex gap-[3%]">
          <div className="w-[30%]">
            <FoodCard />
          </div>
          <div className="w-[30%]">
            <FoodCard />
          </div>
          <div className="w-[30%]">
            <FoodCard />
          </div>
        </div>
      </section>

      <section className="px-[5%] flex relative py-[5vh]">
        <div className="w-[55%] absolute top-[15%] bg-[#F3F6F1] z-1">
          <h2 className="text-[#A62B00] font-normal text-[2.9rem] leading-[140%] w-[70%] ">
            Sugar, Spice and Everything Nice
          </h2>
          <h4 className="text-[#370E00] font-IBM font-normal text-[2rem] leading-[130%]">
            Hello, I’m Marriet
          </h4>
          <p className="text-[#370E00] font-IBM font-normal text-[1.4rem] leading-[130%] mb-[3vh] ">
            I’m a passionate baker who has been creating delicious baked goods
            for over 10 years. I grew up in a family of bakers, and learned
            everything I know about baking from my grandmother, who ran a small
            bakery in my hometown. After completing my culinary degree, I
            started my own bakery, which quickly became a local favorite. My
            bakery specializes in artisanal bread...
          </p>
          <Link
            to=""
            className="text-[#370E00] font-IBM font-normal text-[1.4rem] border-solid border-[#000000] border-[0.5px] py-[1vh] px-[5%] leading-[130%]"
          >
            About Me
          </Link>
        </div>
        <div className="w-[50%] flex ml-[50%] ">
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
