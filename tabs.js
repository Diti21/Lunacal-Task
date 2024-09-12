
import React, { useState , useRef } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');
  const contentRef = useRef(null);
  const scrollToTop = () => {
    contentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
 
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 text-white p-4 rounded-lg shadow-lg max-w-screen-lg mx-auto">
      <div className="bg-black rounded-full p-2 ">
      <div className='flex space-x-36'>{['About Me', 'Experiences', 'Recommended'].map((tab) => (
        <button
          key={tab} 
          onClick={() => setActiveTab(tab.toLowerCase())}
          className={`px-4 py-2  rounded-full font-medium transition-all duration-300 text-white p-2 rounded-md ${
            activeTab === tab ? ' text-white rounded-sm' : ' text-gray-400 hover:bg-gray-800 text-white px-5 '
          }`}
        >
          
          {tab}
        </button> ))}</div></div>

        <div className='w-full mt-4 text-left'>{activeTab === 'about me' && (
        <div className="flex justify-between bg-gray-700 text-white p-4 px-0 py-0 rounded-md my-4 w-full max-w-lg">
          <div className="flex items-start ">
            <div className="ml-4">
              <p className="font-bold text-gray-500">Hello! I'm Dave, your sales rep from Salesforce. I've been working at this company for 3 years. Born and raised in Albany, NY...</p>
            </div>
          </div>
        </div>
      )}

     
      {activeTab === 'experiences' && (
        <div className="bg-gray-700 text-white p-4 rounded-md my-4 w-full text-left">
          <p className="font-bold text-gray-500">Experiences Content.Here you can display information about your experiences.</p>
        </div>
      )}

      {activeTab === 'recommended' && (
        <div className="bg-gray-700 text-white p-4 rounded-md my-4 w-full text-left">
          <p className="font-bold text-gray-500">Recommended Content.Here you can show recommendations or testimonials.</p>
        </div>
      )}
      
      </div>
      <div
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 w-2 h-16 bg-gray-400 hover:bg-gray-500 rounded-full cursor-pointer transition-all"
        >
          <span className="sr-only">Scroll to top</span>
          </div>
    </div>
  );
};

export default Tabs;
