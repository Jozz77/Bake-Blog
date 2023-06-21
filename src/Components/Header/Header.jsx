// import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./Assets/Logo.png";
import Profile from "./Assets/Profile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
// import { NavHashLink } from 'react-router-hash-link';
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }
  let checkState = toggle
    ? "cursor-pointer text-[#1C1B1F]  text-[1.3rem] ssm:text-[1.6rem] sm:text-[1.5rem] md:text-[1rem] lg:text-[1.4rem]"
    : "hidden";
  let checkStates = toggle
    ? "hidden"
    : "search relative text-[0.75rem] font-IBM pb-[0.5vh] text-[#370E00] ssm:text-[0.8rem] sm:text-[0.9rem] md:text-[0.7rem] lg:text-[1rem] border-b-[1px] border-b-[#370E00] border-b-solid";

  // mobile nav bar function
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [tog, setTog] = useState(true);

  function handleSecondClick() {
    setTog((tog) => !tog);
  }

  let newState = tog
    ? "text-[1.5rem] ssm:text-[1.8rem] sm:text-[1.9rem] text-[#370E00]"
    : "hidden";
  let newStates = tog
    ? "hidden"
    : "text-[1.5rem] ssm:text-[1.8rem] sm:text-[2.2rem] text-[#370E00]";

  return (
    <header>
      <div className="hidden md:flex bg-[#F3F6F1] max-w-[1440px] fixed top-0 w-full justify-between z-10 px-[5%] py-[1.5vh] md:py-[2vh] ">
        <section className="flex items-center gap-[3%] w-[20%] md:w-[26%] md:gap-[3%] xl:w-[20%]">
          <Link to="/">
            <div>
              <img className="w-full" src={Logo} alt="Logo" />
            </div>
          </Link>
          <Link to="/">
            <p className="text-normal text-[#370E00] text-[1.2rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[32px] ">
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
            <div className={`${checkStates}`}>
              <AiOutlineSearch className="absolute top-[0%] left-[2%] text-[#1C1B1F] text-[0.8rem] md:text-[1rem] lg:text-[1.4rem] " />
              <input
                className="w-[60%] ml-[20%] mr-[20%] bg-transparent outline-0 placeholder:text-[#370E00] placeholder:text-[0.8rem] md:placeholder:text-[1rem] "
                type="text"
                placeholder="Search"
              />
              <CgClose
                onClick={() => {
                  handleClick();
                }}
                className="cursor-pointer absolute top-[0%] right-[2%] text-[#1C1B1F] text-[0.8rem] md:text-[1rem] lg:text-[1.4rem] "
              />
            </div>
          </div>
          <Link
            to="/"
            className="hover:bg-[#B5C7A5] hover:border-[#B5C7A5] text-normal font-IBM text-[#370E00] font-bold text-[1rem] leading-[32px] py-[0.3vh] rounded-[8px] px-[4%] border-[0.5px] border-solid border-[#000000] md:py-[0.2vh] md:text-[0.9rem] lg:text-[1.2rem]"
          >
            Login
          </Link>
        </section>
      </div>

      {/* mobile nav */}
      <div className="flex bg-[#F3F6F1] px-[5%] py-[1.5vh] z-10 justify-between items-center w-full fixed top-0 md:hidden">
        <section className="flex items-center w-[60%] ssm:w-[65%] sm:w-[40%]">
          <Link to="/" className="w-[25%] mr-[5%] ssm:w-[27%] sm:w-[25%]">
            <div>
              <img className="w-[100%]" src={Logo} alt="Logo" />
            </div>
          </Link>
          <Link to="/" className="w-[70%] ssm:w-[65%] sm:w-[65%]">
            <p className="text-normal text-[#370E00] text-[1rem] ssm:text-[1.2rem] ">
              Flour Queen
            </p>
          </Link>
        </section>

        <section className="w-[60%] flex  justify-end  items-center">
          <div className="overflow-hidden mr-[5%] pr-[20%}">
            <AiOutlineSearch
              onClick={() => {
                handleClick();
              }}
              className={`${checkState}`}
            />
            <div className={`${checkStates}`}>
              <AiOutlineSearch className="absolute top-[0%] left-[2%] text-[#1C1B1F] text-[1rem] ssm:text-[1.2rem] " />
              <input
                className="w-[60%] ml-[20%] mr-[20%] bg-transparent outline-0 placeholder:text-[#370E00] placeholder:text-[0.7rem] ssm:placeholder:text-[0.8rem] "
                type="text"
                placeholder="Search"
              />
              <CgClose
                onClick={() => {
                  handleClick();
                }}
                className="cursor-pointer absolute top-[0%] right-[2%] text-[#1C1B1F] text-[1rem] ssm:text-[1.2rem]"
              />
            </div>
          </div>
          <div className="mr-[5%]">
            <img className="w-full" src={Profile} alt="Profile" />
          </div>
          <div>
            <GiHamburgerMenu
              onClick={() => {
                setIsNavOpen((prev) => !prev);
                handleSecondClick();
              }}
              className={`${newState}`}
            />
            {/* <CgClose
              onClick={() => {
                setIsNavOpen((prev) => !prev);
                handleSecondClick();
              }}
              className={`${newStates}`}
            /> */}
          </div>
        </section>

        {/* menu open */}
        <section
          className={
            isNavOpen
              ? "showMenu overflow-hidden font-Playfair absolute h-[100vh] w-[100%] flex flex-col items-center  bg-[#F3F6F1] font-IBM top-[0] right-0 w-[50%] py-[1.5vh] "
              : "hideMenu"
          }
        >
          <div className="flex justify-between w-full items-center mb-[5vh] px-[5%]">
            <section className="flex items-center w-[60%] ssm:w-[65%] sm:w-[40%]">
              <Link
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                  handleSecondClick();
                }}
                to="/"
                className="w-[21%] mr-[5%] ssm:w-[21%] sm:w-[25%]"
              >
                <div>
                  <img className="w-[100%]" src={Logo} alt="Logo" />
                </div>
              </Link>
              <Link
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                  handleSecondClick();
                }}
                to="/"
                className="w-[70%] ssm:w-[65%] sm:w-[65%]"
              >
                <p className="text-normal font-Playfair text-[#370E00] text-[1rem] ssm:text-[1.2rem] ">
                  Flour Queen
                </p>
              </Link>
            </section>

            <section>
              <CgClose
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                  handleSecondClick();
                }}
                className={`${newStates}`}
              />
            </section>
          </div>

          <Link
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              handleSecondClick();
            }}
            to="/"
            className="font-medium text-[#370E00] pt-[1vh] pb-[2vh] text-[1.2rem] ssm:pb-[2vh] sm:pb-[4vh] ssm:text-[1.4rem] sm:text-[1.5rem]"
          >
            Home
          </Link>
          <hr className="w-[40%] border-solid border-[1px] mb-[9vh] sm:mb-[7vh] lg:my-[3vh]" />
          <Link
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              handleSecondClick();
            }}
            to="/recipes"
            className="font-medium text-[#370E00] pb-[2vh] text-[1.2rem] ssm:pb-[2vh] sm:pb-[4vh] ssm:text-[1.4rem] sm:text-[1.5rem]"
          >
            Recipes
          </Link>
          <hr className="w-[40%] border-solid border-[1px] mb-[9vh] sm:mb-[7vh] lg:my-[3vh]" />
          <Link
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              handleSecondClick();
            }}
            to="/about"
            className="font-medium text-[#370E00] pb-[2vh] text-[1.2rem] ssm:pb-[2vh] sm:pb-[4vh] ssm:text-[1.4rem] sm:text-[1.5rem]"
          >
            About
          </Link>
          <hr className="w-[40%] border-solid border-[1px] mb-[9vh] sm:mb-[7vh] lg:my-[3vh]" />
          <Link
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              handleSecondClick();
            }}
            to="/contact"
            className="font-medium text-[#370E00] pb-[2vh] text-[1.2rem] ssm:pb-[2vh] sm:pb-[4vh] ssm:text-[1.4rem] sm:text-[1.5rem]"
          >
            Contact
          </Link>
          <hr className="w-[40%] border-solid border-[1px] mb-[9vh] sm:mb-[7vh] lg:my-[3vh]" />
        </section>
      </div>
    </header>
  );
}
