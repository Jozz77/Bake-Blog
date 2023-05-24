import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PostSlide from './PostSlide';
import Poststags from './Poststags';
import FoodCard from '../../Components/FoodCard/FoodCard'
import PostsComment from './PostsComment';


export default function PostsBody() {
  return (
    <div className="mt-[15vh]">
        <section className="flex justify-between items-center px-[10%] my-[5vh] ">
        <div className="flex gap-[3%] w-[70%]">
            <Link to="/recipes" className="text-[#A62B00] font-normal text-[1.7rem] leading-[120%] " >All Posts</Link>
            <Link to="/recipes" className="text-[#370E00] font-normal text-[1.7rem] leading-[120%] " >Popular</Link>
            <Link to="/recipes" className="text-[#370E00] font-normal text-[1.7rem] leading-[120%] " >Recent</Link> 
            <Link to="/recipes" className="text-[#370E00] font-normal text-[1.7rem] leading-[120%] " >Sweet</Link> 
            <Link to="/recipes" className="text-[#370E00] font-normal text-[1.7rem] leading-[120%] " >Savory</Link>
        </div>
        <div>
            <AiOutlineSearch className="w-full" />
        </div>
      </section>

      <section className='px-[15%] flex justify-between items-center pb-[2vh]'>
        <h1 className='text-[#A62B00] font-normal text-[3.5rem] leading-[120%] '>Bagels</h1>
        <div>
            <AiOutlineSearch className="w-full" />
        </div>
      </section>
      
      <section className='px-[15%] font-IBM'>
        <b className='text-[#370E00] font-semibold text-[1.1rem] leading-[150%] pb-[2vh]'>Bagels are a type of bread product that is boiled before it is baked, giving it a chewy texture.</b>
        <p className='text-[#370E00] font-normal text-[1.1rem] leading-[150%] pb-[2vh]'>Traditionally, bagels are made with a sourdough starter, which adds flavor and texture to the final product.</p>
        
        <div className='pb-[2vh]'>
            <PostSlide /> 
        </div>
        <i className='text-[#370E00] font-semibold text-[1.1rem] leading-[150%]' >"Bagels are proof that God loves us and wants us to be happy."</i>
        <p className='text-[#370E00] font-normal text-[1.1rem] text-justify leading-[150%] pt-[1vh] pb-[1vh]'>Bagels are a type of bread product that are known for their unique shape and texture. They are made by boiling the dough in water and then baking it in an oven. Bagels are traditionally associated with Jewish cuisine, although they are now enjoyed by people all over the world. Bagels have a chewy texture and a dense, slightly sweet flavor. They are often eaten as snack, plain or with various toppings such as cream cheese, butter, jam, smoked salmon, or deli meats.</p>
        <p className='text-[#370E00] font-normal text-[1.1rem] text-justify leading-[150%] pb-[2vh]'>There are flavors and styles, including plain, sesame, poppy seed, onion, garlic, cinnamon raisin, and everything bagels. They can be found in most bakeries and supermarkets, and many people enjoy making their own bagels at home.</p>
        <Poststags />

        <div>
          <div className='flex justify-between items-center py-[2vh] '>
            <h2 className='text-[#A62B00] font-normal text-[1.8rem] leading-[120%]'>Recent Posts</h2>
            <Link to=''className='bg-[#F3F6F1] font-IBM text-[#370E00] font-normal text-[1.3rem] leading-[120%] py-[1vh] px-[2%]  rounded-[8px] border-[0.5px] border-solid border-[#370E00] '>See All</Link>
          </div>
          <div className='flex gap-[5%]'>
            <FoodCard />
            <FoodCard />
          </div>
        </div>

        <div>
          <PostsComment />
        </div>
      </section>
    </div>
  )
}
