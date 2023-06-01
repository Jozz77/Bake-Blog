import { useState } from "react";
import Image1 from "./Assets/Image1.png";
import FollowDescription from "./FollowDescription";
import "./FollowMe.css";

export default function FollowMe() {
  const [show, setShow] = useState(false);

  return (
    <section className="px-[5%]  py-[5vh]">
      <h3 className="text-[#A62B00] font-normal text-[2rem] leading-[140%] pb-[3vh]">
        Follow Me <i>@myjoygirl</i>
      </h3>
      <div className="flex  gap-[2%] justify-between">
        <div className="follow relative">
          <div className="w-[23] ">
            <img src={Image1} className="w-full" alt="Braunie Image" />
          </div>

          <div className="des-content-top absolute top-0 left-0 bottom-0 right-0 ">
            <FollowDescription
              title="English muffins"
              text="This are type of bread product that is made using a sourdough starter, which adds flavor and texture to it. The dough is rolled out and cut into rounds, then cooked on a griddle or in a pan before being baked in the oven."
            />
          </div>
        </div>

        <div className="follow relative">
          <div className="w-[23] ">
            <img src={Image1} className="w-full" alt="Braunie Image" />
          </div>

          <div className="des-content-right absolute top-0 left-0 bottom-0 right-0 ">
          <FollowDescription
              title="Croissants"
              text="These are a type of pastry that is made using a laminated dough, which is a dough that has been rolled out and layered with butter. The dough is then rolled up and left to ferment overnight, which adds flavor to it."
            />
          </div>
        </div>

        <div className="follow relative">
          <div className="w-[23] ">
            <img src={Image1} className="w-full" alt="Braunie Image" />
          </div>

          <div className="des-content-bottom absolute top-0 left-0 bottom-0 right-0 ">
          <FollowDescription
              title="Sponge Cakes"
              text="They are made using a simple recipe that typically includes eggs, sugar, flour, and sometimes flavorings such as vanilla extract or lemon zest. Sponge cakes get their airy texture from the eggs, which are whipped."
            />
          </div>
        </div>

        <div className="follow relative">
          <div className="w-[23] ">
            <img src={Image1} className="w-full" alt="Braunie Image" />
          </div>

          <div className="des-content-left absolute top-0 left-0 bottom-0 right-0 ">
            <FollowDescription
              title="Burger"
              text="The key elements of a great burger is the bun. This is soft and slightly sweet, with enough structure to hold up to the juicy patty and toppings without falling apart. The patty is cooked with a crispy exterior and juicy and flavorful."
            />
          </div>
        </div>
      </div>
      <hr className="mt-[2vh] border-solid  border-[0.5px]" />
    </section>
  );
}
