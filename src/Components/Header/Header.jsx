// import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./Assets/Logo.png";
import Profile from "./Assets/Profile.png";
import { AiOutlineSearch } from "react-icons/ai";
// import { NavHashLink } from 'react-router-hash-link';
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle
    ? "cursor-pointer text-[#1C1B1F] text-[1rem] md:text-[1rem] lg:text-[1.4rem]"
    : "hidden";
  let checkStates = toggle
    ? "hidden"
    : "search relative text-[0.5rem] font-IBM pb-[0.5vh] text-[#370E00] md:text-[0.7rem] lg:text-[1rem] border-b-[1px] border-b-[#370E00] border-b-solid";

  return (
    <header className="hidden md:flex fixed top-0 w-full justify-between z-10 px-[5%] py-[1.5vh] md:py-[2vh] ">
      <section className="flex items-center gap-[3%] w-[25%] md:w-[25%] lg:gap-[7%] xl:w-[20%]">
        <Link to="/">
          <div>
            <img className="w-[90%] lg:w-full" src={Logo} alt="Logo" />
          </div>
        </Link>
        <Link to="/">
          <p className="text-normal text-[#370E00] text-[1rem] md:text-[1rem] lg:text-[1.4rem] leading-[32px] ">
            Flour Queen
          </p>
        </Link>
      </section>

      <section className="flex w-[70%] justify-between items-center lg:w-[70%] xl:w-[62%]">
        <Link
          to="/"
          className="active:text-[#A62B00] text-normal text-[#370E00] text-[1rem] md:text-[1rem] lg:text-[1.4rem] leading-[32px]"
        >
          Home
        </Link>
        <Link
          to="/recipes"
          className="text-normal text-[#370E00] text-[1rem] md:text-[1rem] lg:text-[1.4rem] leading-[32px]"
        >
          Recipes
        </Link>
        <Link
          to="/about"
          className="text-normal text-[#370E00] text-[1rem] md:text-[1rem] lg:text-[1.4rem] leading-[32px]"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-normal text-[#370E00] text-[1rem] md:text-[1rem] lg:text-[1.4rem] leading-[32px]"
        >
          Contact
        </Link>
        <div>
          <img className="w-full" src={Profile} alt="Profile" />
        </div>
        <div className="overflow-hidden">
          <AiOutlineSearch
            onClick={() => {
              handleClick();
            }}
            className={`${checkState}`}
          />
          <div
           
            className={`${checkStates}`}
          >
            <AiOutlineSearch className="absolute top-[0%] left-[2%] text-[#1C1B1F] text-[0.8rem] md:text-[1rem] lg:text-[1.4rem] " />
            <input
              className="w-[60%] ml-[20%] mr-[20%] bg-transparent outline-0 placeholder:text-[#370E00] placeholder:text-[0.8rem] md:placeholder:text-[1rem] "
              type="text"
              placeholder="Search"
            />
            <AiOutlineSearch  onClick={() => {
              handleClick();
            }} className="cursor-pointer absolute top-[0%] right-[2%] text-[#1C1B1F] text-[0.8rem] md:text-[1rem] lg:text-[1.4rem] " />
          </div>
        </div>
        <Link
          to="/"
          className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] text-normal font-IBM text-[#370E00] font-bold text-[1rem] leading-[32px] py-[0.3vh] rounded-[8px] px-[4%] border-[0.5px] border-solid border-[#000000] md:py-[0.2vh] md:text-[0.9rem] lg:text-[1.2rem]"
        >
          Login
        </Link>
      </section>
    </header>
  );
}
