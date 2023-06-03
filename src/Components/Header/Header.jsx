// import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './Assets/Logo.png'
import Profile from './Assets/Profile.png'
import { AiOutlineSearch } from 'react-icons/ai';
// import { NavHashLink } from 'react-router-hash-link';
import './Header.css'


export default function Header() {
  return (
    <header className='flex fixed top-0 w-full justify-between z-10 px-[5%] py-[1.5vh] md:py-[2vh] '>
        <section className='flex items-center gap-[3%] w-[30%] md:w-[25%] lg:gap-[7%] xl:w-[20%]'>
        <Link to="/">
            <div>
                <img className='w-[80%] lg:w-full' src={Logo} alt="Logo" />
            </div>
            </Link>
            <Link to='/'>
            <p className='text-normal text-[#370E00] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[32px] '>Flour Queen</p>
            </Link>
            
        </section>

        <section className='flex w-[65%] justify-between items-center lg:w-[60%] xl:w-[55%]'>
            <Link to='/' className='active:text-[#A62B00] text-normal text-[#370E00] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[32px]' >Home</Link>
            <Link to='/recipes' className='text-normal text-[#370E00] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[32px]'>Recipes</Link>
            <Link to='/about' className='text-normal text-[#370E00] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[32px]'>About</Link>
            <Link to='/contact' className='text-normal text-[#370E00] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] leading-[32px]'>Contact</Link>
            <div>
                <img className='w-full' src={Profile} alt="Profile" />
            </div>
            <AiOutlineSearch className='text-[#1C1B1F] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] ' />
            <Link to='/' className='hover:bg-[#B5C7A5] hover:border-[#B5C7A5] text-normal font-IBM text-[#370E00] font-bold text-[1rem] leading-[32px] py-[0.3vh] rounded-[8px] px-[4%] border-[0.5px] border-solid border-[#000000] md:py-[0.5vh] md:text-[1.1rem] lg:text-[1.2rem]'>Login</Link>
        </section>
    </header>
  )
}
