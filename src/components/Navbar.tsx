import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            {/* Replace this URL with your logo URL when ready */}
            <img 
              src="../logoo.png" 
              alt="Ayodhya Deals" 
              /* making logo transperent and changing the colour to its background synchronized colour */
              className="h-12 bg-gradient-to-r from-black-500 to-blue-600 to-purple-600 text-transparent rounded-lg "
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/200x80/1e293b/white?text=Ayodhya+Deals';
              }}
            />
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 px-4 py-1.5 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            
            <Link 
              to="/products"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-black-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;