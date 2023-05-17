import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage"
import About from './Pages/About/About'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage /> }> </Route>
          <Route path='/about' element={<About/> }> </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
