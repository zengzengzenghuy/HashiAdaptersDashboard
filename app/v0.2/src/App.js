import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';

import './App.css';
import Home from './pages/Home';
import Adapters from './pages/Adapters';
import Test from './pages/Test';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/adapters" element={<Adapters />} />
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
