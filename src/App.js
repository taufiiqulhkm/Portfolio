import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import Navbar from './components/Navbar/navbar';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/about' element= {<About/>}/>
      </Routes>
    </Router>
  )
}

export default App;
