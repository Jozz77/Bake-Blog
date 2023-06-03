import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage"
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Recipes from './Pages/Recipes/Recipes'
import Posts1 from './Pages/Posts/Posts1'
import Posts2 from './Pages/Posts/Posts2'
import Posts3 from './Pages/Posts/Posts3'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage /> }> </Route>
          <Route path='/about' element={<About/> }> </Route>
          <Route path='/contact' element={<Contact/> }> </Route>
          <Route path='/recipes' element={<Recipes/> }> </Route>
          <Route path='/posts1' element={<Posts1/> }> </Route>
          <Route path='/posts2' element={<Posts2/> }> </Route>
          <Route path='/posts3' element={<Posts3/> }> </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
