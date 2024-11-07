import React from 'react';
import { FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between bg-[#C5B299] px-6 py-4'>
     <h1 className="text-2xl font-bold text-white">MANZZARI</h1>

     <div className="flex-1 mx-6">
       <input 
         type="text"
         placeholder="Search for Gold Jewelry, Diamond Jewelry and more"
         className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
         />
     </div>
     <div className='flex space-x-4 text-white'>
     <FaHeart className="cursor-pointer hover:text-gray-300" />
     <FaUser className="cursor-pointer hover:text-gray-300" />
     <FaShoppingCart className="cursor-pointer hover:text-gray-300" />
     </div>
    </header>
  );
};

export default Header;
