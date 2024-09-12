
import './App.css';
import React from 'react';
import Tabs from './tabs';
import Gallery from './Gallery';

function App() {
  return (
    <div className="flex flex-col md:flex-row md:h-screen bg-gray-900">
      {/* Left half empty for responsiveness */}
      <div className="hidden  md:flex  md:w-1/2"></div>

      {/* Right Side */}
      <div className="md:w-1/2 p-4">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
