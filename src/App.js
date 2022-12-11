import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Causes from './components/Causes';
import Event from './components/Event';
import Blog from './components/Blog';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/causes' element= {<Causes />} />
      <Route path='/event' element= {<Event />} />
      <Route path='/blog' element= {<Blog />} />

    </Routes>
  );
}

export default App;
