// import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './Assets/Logo.png'
import Profile from './Assets/Profile.png'
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.css'


export default function Header() {
  return (
    <header className='flex fixed top-0 w-full justify-between z-10 px-[5%] py-[2vh] '>
        <section className='flex items-center gap-[7%] w-[20%]'>
            <div>
                <img className='w-full' src={Logo} alt="Logo" />
            </div>
            <p className='text-normal text-[#370E00] text-[1.4rem] leading-[32px] '>Flour Queen</p>
        </section>

        <section className='flex w-[55%] justify-between items-center '>
            <Link to='/' className='active:text-[#A62B00] text-normal text-[#370E00] text-[1.4rem] leading-[32px]' >Home</Link>
            <Link to='/recipes' className='text-normal text-[#370E00] text-[1.4rem] leading-[32px]'>Recipes</Link>
            <Link to='/about' className='text-normal text-[#370E00] text-[1.4rem] leading-[32px]'>About</Link>
            <Link to='/contact' className='text-normal text-[#370E00] text-[1.4rem] leading-[32px]'>Contact</Link>
            <div>
                <img className='w-full' src={Profile} alt="Profile" />
            </div>
            <AiOutlineSearch className='text-[#1C1B1F] text-[1.4rem] ' />
            <Link to='/' className=' text-normal font-IBM text-[#370E00] text-[1.4rem] leading-[32px] py-[0.5vh] px-[2%] border-[0.5px] border-solid border-[#000000] '>Login</Link>
        </section>
    </header>
  )
}
