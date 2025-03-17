import React from "react";
import { assets } from "../assets/assets";

const SalesDetails = () => {
    return (
        <div className="m-5 p-5 bg-white rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Sales Details</h2>
            <div className="relative h-40 w-full">
                <img src={assets.units_bar} alt="Units Bar" className="absolute top-0 left-0 h-40 w-full z-0" />
                <img src={assets.graph} alt="Graph" className="absolute top-5 left-5 h-32 w-full z-10" />
            </div>
        </div>
    );
};

export default SalesDetails;
