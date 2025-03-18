import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import DashContent from './components/DashContent';


const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex-1 flex flex-col">
      <Navbar menuBar={() => setIsSidebarVisible(!isSidebarVisible)} />
      <div className='mt-14'>
      {isSidebarVisible && (
        <div className="w-60 transition-all duration-300">
          <Menubar />
        </div>
      )}
      <div className={`flex-1 flex flex-col transition-all duration-3000 ${isSidebarVisible ? 'ml-60' : 'w-full'}`}>
        <DashContent />
      </div>
      </div>
    </div>
  )
}

export default App
