import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/about' element= {<About/>}/>
      </Routes>
    </Router>
  )
}

export default App;
