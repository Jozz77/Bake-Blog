import Image from './Assets/Image.png'

export default function PostSlide(props) {
  return (
    <div>
        <img className='w-full' src={props.img} alt="Snacks" />
    </div>
  )
}
