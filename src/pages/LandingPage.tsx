import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Replace this URL with your logo URL when ready */}
            {/* <img 
              src="../logoo.png" 
              alt="Ayodhya Deals" 
              className="h-24 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent rounded-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/400x160/1e293b/white?text=Ayodhya+Deals';
              }}
            /> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Discover Amazing Deals
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Your one-stop destination for electronics, fashion, and everyday essentials at unbeatable prices.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="group relative px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Shop Now
                <Sparkles className="w-5 h-5 animate-pulse" />
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="aspect-w-16 aspect-h-9">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://videos.pexels.com/video-files/6994619/6994619-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Experience Shopping Like Never Before</h2>
                <p className="text-gray-200 text-lg max-w-2xl">
                  Discover a world of premium products, amazing deals, and exceptional service at Ayodhya Deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Electronics',
              image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500',
              description: 'Latest gadgets and electronics'
            },
            {
              title: 'Fashion',
              image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=500',
              description: 'Trendy clothing and accessories'
            },
            {
              title: 'Home Essentials',
              image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=500',
              description: 'Quality household items'
            }
          ].map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => navigate('/products')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;