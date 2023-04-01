import React from 'react';
import logo from './logo.svg';
import './App.css';
import Podcast from './podcast';
import Navigation from  './navigation';
import Home from './home';
import MovieList from './movies';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;