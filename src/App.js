import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import TotalStats from './components/TotalStats';
import SalesDetails from './components/SalesDetails';
import DealsDetails from './components/DealsDetails';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex h-screen">
      {isSidebarVisible && (
        <div className="w-60 transition-all duration-300">
          <Menubar />
        </div>
      )}

      <div className={`flex-1 flex flex-col transition-all duration-3000 ${isSidebarVisible ? 'ml-0' : 'w-full'}`}>
        <Navbar menuBar={() => setIsSidebarVisible(!isSidebarVisible)} />
        <div className="p-6 bg-gray-50 h-full">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <TotalStats />
          <SalesDetails />
          <DealsDetails />
        </div>
      </div>
    </div>
  )
}

export default App
