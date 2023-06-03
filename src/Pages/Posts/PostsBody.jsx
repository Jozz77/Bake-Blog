import { AiOutlineShareAlt } from "react-icons/ai";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import Poststags from "./Poststags";
import PostsComment from "./PostsComment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Posts.css";
// import Image5 from "./Assets/Image5.png";
import Image2 from "./Assets/Image2.png";
import Image3 from "./Assets/Image3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PostsCard from "../../Components/PostsCard/PostsCard";

export default function PostsBody(props) {
  return (
    <div className="mt-[12vh] lg:mt-[15vh]">
      <section className=" px-[10%] my-[3vh] lg:px-[15%] lg:my-[5vh]  ">
        <div className="flex justify-between ">
          <Link
            to="/recipes"
            className="text-[#A62B00] font-normal text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[120%] "
          >
            All Posts
          </Link>
          <HashLink
            to="/recipes"
            className="text-[#370E00] font-normal text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[120%] "
          >
            Popular
          </HashLink>
          <HashLink
            to="/recipes#recent"
            className="text-[#370E00] font-normal text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[120%] "
          >
            Recent
          </HashLink>
          <HashLink
            to="/recipes"
            className="text-[#370E00] font-normal text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[120%] "
          >
            Sweet
          </HashLink>
          <HashLink
            to="/recipes"
            className="text-[#370E00] font-normal text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] leading-[120%] "
          >
            Savory
          </HashLink>
        </div>
      </section>

      <section className="px-[10%] lg:px-[15%] flex justify-between items-center pb-[2vh]">
        <h1 className="text-[#A62B00] font-normal text-[2.3rem] leading-[120%] md:text-[2.8rem]  lg: text-[3.2rem]xl:text-[3.5rem]  ">
          {props.title}
        </h1>
        <div>
          <AiOutlineShareAlt className="w-full" />
        </div>
      </section>

      <section className="px-[10%] lg:px-[15%] font-IBM">
        <b className="text-[#370E00] font-semibold text-[1rem] md:text-[1.05rem] xl:text-[1.1rem] leading-[150%] ">
          {props.boldText}
        </b>
        <p className="text-[#370E00] font-normal text-[1rem] md:text-[1.05rem] xl:text-[1.1rem] leading-[150%] pt-[0.5vh] pb-[2vh]">
          {props.belowBoldText}
        </p>

        <div className="border-[1px] border-[#000000] border-solid p-[0.5%] mb-[2vh]">
          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img className="w-full" src={props.Image1} alt="Snacks" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="w-full" src={props.Image2} alt="Snacks" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="w-full" src={props.Image3} alt="Snacks" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <i className="text-[#370E00] font-semibold text-[1rem] md:text-[1.05rem] xl:text-[1.1rem] leading-[150%]">
          {props.italicText}
        </i>
        <p className="text-[#370E00] font-normal text-[1rem] md:text-[1.05rem] xl:text-[1.1rem] text-justify leading-[150%] pt-[1vh] pb-[1vh]">
          {props.aboveImageText1}
        </p>
        <p className="text-[#370E00] font-normal text-[1rem] md:text-[1.05rem] xl:text-[1.1rem] text-justify leading-[150%] pb-[2vh]">
          {props.aboveImageText2}
        </p>
        <Poststags />

        <div>
          <div className="flex justify-between items-center py-[1.5vh]  md:py-[2vh] ">
            <h2 className="text-[#A62B00] font-normal text-[1.4rem] leading-[120%] md:text-[1.6rem] xl:text-[1.8rem] ">
              Recent Posts
            </h2>
            <Link
              to="/recipes"
              className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] bg-[#F3F6F1] font-IBM text-[#370E00] font-normal text-[1rem] leading-[120%] py-[1vh] px-[2%]  rounded-[8px] border-[0.5px] border-solid border-[#370E00] md:text-[1.1rem] xl:text-[1.3rem]"
            >
              See All
            </Link>
          </div>
          <div className="flex justify-between">
            <PostsCard
              img={Image2}
              hoverTitle="Strawberry Shortcake"
              link='/posts3'
              hoverText="There are many variations of strawberry cake, but most recipes call for a basic sponge cake that is flavored with vanilla extract and almond extract. Fresh strawberries are added to the batter or used to create a filling or topping. Some recipes call for a layer of strawberry jam or a cream cheese frosting that is flavored with strawberry puree. The fruit to the cake batter gives it a burst of juicy sweetness."
              title="Strawberry Shortcake"
            />
            <PostsCard
              img={Image3}
              hoverTitle="Peach and Cream"
              link='/posts1'
              hoverText="Peach and cream are two delightful ingredients that come together to create a delicious and refreshing dessert or snack. Peaches are a sweet and juicy fruit that is in season during the summer months, while cream is a dairy product that is often used to add richness and depth of flavor to desserts. One of the most popular ways to enjoy peaches and cream is to create a simple dessert by slicing fresh peaches and serving."
              title="Peach and Cream"
            />
          </div>
        </div>

        <div>
          <PostsComment />
        </div>
      </section>
    </div>
  );
}
