import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Causes from './components/Causes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/causes' element= {<Causes />} />

    </Routes>
  );
}

export default App;
