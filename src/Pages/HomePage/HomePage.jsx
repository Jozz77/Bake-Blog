import './HomePage.css'

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HomePageBody from "./HomePageBody";

export default function HomePage() {
  return (
    <div className='relative'>
        <Header />
        <HomePageBody />
        <Footer />
    </div>
  )
}
