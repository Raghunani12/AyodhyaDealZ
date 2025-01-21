import React, { useState } from 'react';
import { Search, Phone, MessageCircle, Star } from 'lucide-react';

const products = [
  // Electronics Category
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    category: 'Electronics',
    price: 2999,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    category: 'Electronics',
    price: 5999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 1999,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    category: 'Electronics',
    price: 1499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 4999,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 6,
    name: 'Webcam HD Pro',
    category: 'Electronics',
    price: 3499,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1596566787618-50fd2e36b25a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 7,
    name: 'Power Bank 20000mAh',
    category: 'Electronics',
    price: 1799,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 8,
    name: 'WiFi Router',
    category: 'Electronics',
    price: 2499,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 9,
    name: 'USB-C Hub',
    category: 'Electronics',
    price: 1299,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1619737307100-45c40f69d2cd?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 10,
    name: 'Wireless Charger',
    category: 'Electronics',
    price: 999,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1622460736035-50d9d66458e8?auto=format&fit=crop&q=80&w=500',
  },

  // Fashion Category
  {
    id: 11,
    name: 'Summer Floral Dress',
    category: 'Fashion',
    price: 1499,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 12,
    name: 'Denim Jacket',
    category: 'Fashion',
    price: 2499,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 13,
    name: 'Casual Sneakers',
    category: 'Fashion',
    price: 1999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 14,
    name: 'Leather Handbag',
    category: 'Fashion',
    price: 3499,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 15,
    name: 'Formal Shirt',
    category: 'Fashion',
    price: 1299,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 16,
    name: 'Designer Sunglasses',
    category: 'Fashion',
    price: 999,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 17,
    name: 'Leather Wallet',
    category: 'Fashion',
    price: 799,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 18,
    name: 'Analog Watch',
    category: 'Fashion',
    price: 2999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 19,
    name: 'Running Shoes',
    category: 'Fashion',
    price: 2499,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 20,
    name: 'Cotton T-Shirt',
    category: 'Fashion',
    price: 599,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500',
  },

  // Home Essentials Category
  {
    id: 21,
    name: 'Storage Container Set',
    category: 'Home Essentials',
    price: 799,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1520981825232-ece5fae45120?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 22,
    name: 'Kitchen Knife Set',
    category: 'Home Essentials',
    price: 1499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 23,
    name: 'Bedsheet Set',
    category: 'Home Essentials',
    price: 999,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1629949009765-5bc75b2d5b76?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 24,
    name: 'Bathroom Organizer',
    category: 'Home Essentials',
    price: 599,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 25,
    name: 'LED Table Lamp',
    category: 'Home Essentials',
    price: 899,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 26,
    name: 'Vacuum Flask',
    category: 'Home Essentials',
    price: 699,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1622463461333-611830d028bd?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 27,
    name: 'Laundry Basket',
    category: 'Home Essentials',
    price: 499,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 28,
    name: 'Cooking Pot Set',
    category: 'Home Essentials',
    price: 1999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1584947897558-4e06c5b0d8c2?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 29,
    name: 'Door Mat',
    category: 'Home Essentials',
    price: 299,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1603404395085-1c3ad7f2ef03?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 30,
    name: 'Wall Clock',
    category: 'Home Essentials',
    price: 799,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 31,
    name: 'Coffe-Cup',
    category: 'Home Essentials',
    price: 299,
    rating: 4.2,
    image:'../src/images/home/Coffe_cup.jpg'
  }
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Electronics', 'Fashion', 'Home Essentials'];

  const phoneNumber = '+91 9014769239';
  const whatsappNumber = '919014769239';

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppClick = (product: typeof products[0]) => {
    const message = `Hi, I'm interested in ${product.name} (₹${product.price}). Please provide more details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-900 text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-400">
              No products found matching your search criteria.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">|</span>
                    <span className="text-sm text-gray-400">{product.category}</span>
                  </div>
                  <div className="text-xl font-bold mb-4">₹{product.price}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWhatsAppClick(product)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={handleCallClick}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;