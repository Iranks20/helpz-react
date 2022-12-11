import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Causes from './components/Causes';
import Event from './components/Event';
import Blog from './components/Blog';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/causes' element= {<Causes />} />
      <Route path='/event' element= {<Event />} />
      <Route path='/blog' element= {<Blog />} />
      <Route path='/donate' element= {<Donate />} />
      <Route path='/volunteer' element= {<Volunteer />} />
      <Route path='/contact' element= {<Contact />} />

    </Routes>
  );
}

export default App;
