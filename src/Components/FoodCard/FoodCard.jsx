import CardHero from './Assets/CardHero.png'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';

export default function FoodCard() {
  return (
    <div className="bg-[#E8EFE1]  px-[3%] py-[2vh]">
        <div>
            <img className='w-full' src={CardHero} alt="" />
        </div>
        <h2 className='font-normal text-[#A62B00] text-[3.4rem] leading-[120%] pt-[1vh] '>Bagels</h2>
        <p className='font-normal font-IBM text-[#370E00] text-[1.5rem] leading-[150%] pt-[1vh] '>Bagels are a type of bread product that is boiled before it...</p>
        <hr className='border-solid border-[#B5C7A5] border-[0.5px] mt-[1vh]'/>
            <section className='flex justify-between items-center mt-[1vh]'>
                <div className='flex items-center gap-[10%] '>
                    <div>
                    <AiOutlineEye className='text-[#370E00] text-[1.5rem]' />
                </div>  
                <p className='font-normal font-IBM text-[#370E00] text-[1.5rem]'>0</p>
            </div>
            <div>
                <AiOutlineHeart className='text-[#370E00] text-[1.5rem]' />
                {/* <AiFillHeart className='text-[#370E00] text-[1.5rem]' /> */}
            </div>
        </section>
    </div>
  )
}
