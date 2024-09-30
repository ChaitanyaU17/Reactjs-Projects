import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './data/Home/Navbar';
import Home from './data/Home/Homescreen';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          </Routes>

        </div>
      </Router>

    </div>
  );
}

export default App;
