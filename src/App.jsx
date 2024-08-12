import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Tools from './pages/Tools';
import WeatherWidget from './components/WeatherWidget';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<Tools/>} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/weather" element={<WeatherWidget />} />
            <Route path="/calculator" element={<Calculator/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
