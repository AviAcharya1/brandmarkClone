import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideToolbar from './components/SideToolbar';
import ToolsPage from './pages/ToolsPage';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import Login from './pages/Login';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Customization from './components/Customization';

function App() {
  return (
    <Router>
      <div className="App bg-yellow-300">
        <Header />
        <SideToolbar />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Testimonial />
          <Features />
          <Customization />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

