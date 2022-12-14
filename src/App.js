import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Creators from './components/Creators';
import Footer from './components/Footer';
import Home from './components/Home';
import MarketPlaces from './components/MarketPlaces';

import Navbar from './components/Navbar';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const App = () => {
  useSmoothScroll()
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/marketplace' element={<MarketPlaces/>}/>
        <Route path='/creators' element={<Creators />}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
