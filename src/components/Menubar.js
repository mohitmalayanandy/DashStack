import React from 'react'
import { assets } from '../assets/assets'

const Menubar = () => {
    return (
        <div className="fixed h-full p-4 w-60 overflow-y-auto">
            <div className="space-y-1">
                {[
                    { icon: assets.dashboard_icon, label: 'Dashboard' },
                    { icon: assets.product_icon, label: 'Products' },
                    { icon: assets.favourite_icon, label: 'Favourites' },
                    { icon: assets.inbox_icon, label: 'Inbox' },
                    { icon: assets.order_list, label: 'Order Lists' },
                    { icon: assets.product_stock, label: 'Product Stock' },
                ].map((item, index) => (
                    <div key={index} className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                        <img src={item.icon} alt={item.label} className="h-4 w-4" />
                        <p className="ml-4">{item.label}</p>
                    </div>
                ))}
            </div>
            <hr className="w-full border-gray-300" />
            <p className="mt-4 mb-2 text-gray-500">Pages</p>
            <div className="space-y-1">
                {[
                    { icon: assets.pricing_icon, label: 'Pricing' },
                    { icon: assets.calender_icon, label: 'Calender' },
                    { icon: assets.todo_icon, label: 'To-Do' },
                    { icon: assets.contact_icon, label: 'Contact' },
                    { icon: assets.invoice_icon, label: 'Invoice' },
                    { icon: assets.ui_icon, label: 'UI Element' },
                    { icon: assets.team_icon, label: 'Team' },
                    { icon: assets.table_icon, label: 'Table' },
                ].map((item, index) => (
                    <div key={index} className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                        <img src={item.icon} alt={item.label} className="h-4 w-4" />
                        <p className="ml-4">{item.label}</p>
                    </div>
                ))}
            </div>
            <hr className="w-full border-gray-300" />
            <div className="space-y-1">
                {[
                    { icon: assets.setting_icon, label: 'Settings' },
                    { icon: assets.logout_icon, label: 'Logout' },
                ].map((item, index) => (
                    <div key={index} className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                        <img src={item.icon} alt={item.label} className="h-4 w-4" />
                        <p className="ml-4">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menubar
