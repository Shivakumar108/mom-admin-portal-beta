import React from 'react';
import user from '../../assets/Dashboard/fa--users.png';
import dollar from '../../assets/Dashboard/dollar.png';
import order from '../../assets/Dashboard/order.png';
import delivery from '../../assets/Dashboard/delivery.png';
const TopNavBar = ({ stats }) => (
  
  <div className="p-6 m-2 rounded-lg shadow-md flex bg-[#00a99d] text-white w-1/2 gap-6 justify-center">
    <StatCard icon={user} label="Total Users" value={stats.users} />
    <StatCard icon={dollar} label="Total Revenue" value={`Rs.${stats.revenue}`} />
    <StatCard icon={order} label="Total Orders" value={stats.orders} />
    <StatCard icon={delivery} label="Total Boys" value={stats.deliveryBoys} />
  </div>
);
const StatCard = ({ icon, label, value }) => (
  <div className="flex items-center space-x-4 min-w-[140px]">
    <img src={icon} alt={label} className="h-12 w-12" />
    <div>
      <p className="text-sm">{label}</p>
      <p className="text font-bold">{value}</p>
    </div>
  </div>
);
export default TopNavBar;
