
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AboutUs from './Pages/AboutUs/AboutUs'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services';

function App() {

  return (
    <>
      <Router>
    <div className='app'>
       <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/#about-us' component = {<AboutUs/>} />
        <Route path='/services' component = {<Services/>} />
       </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
