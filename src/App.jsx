import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage"
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Recipes from './Pages/Recipes/Recipes'
import Posts from './Pages/Posts/Posts'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage /> }> </Route>
          <Route path='/about' element={<About/> }> </Route>
          <Route path='/contact' element={<Contact/> }> </Route>
          <Route path='/recipes' element={<Recipes/> }> </Route>
          <Route path='/posts' element={<Posts/> }> </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
