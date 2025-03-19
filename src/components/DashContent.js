import React from 'react'
import TotalStats from './TotalStats';
import SalesDetails from './SalesDetails';
import DealsDetails from './DealsDetails';

const DashContent = () => {
    return (
        <div className=" bg-gray-50 h-full">
            <h1 className="p-4 text-2xl font-bold">Dashboard</h1>
            <TotalStats />
            <SalesDetails />
            <DealsDetails />
        </div>
    )
}

export default DashContent