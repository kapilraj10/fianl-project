import { useState } from 'react';
import { FaFilter, FaSearch, FaShoppingCart, FaLeaf, FaAppleAlt, FaSeedling, FaBug } from 'react-icons/fa';

const Product = () => {
  // Sample product data
  const allProducts = [
    { id: 1, name: 'Tomato Seeds', price: 120, category: 'Seeds', image: '🌱', rating: 4.5 },
    { id: 2, name: 'Organic Pesticide', price: 350, category: 'Pesticides', image: '🐛', rating: 4.2 },
    { id: 3, name: 'Apple Sapling', price: 180, category: 'Fruits', image: '🍎', rating: 4.7 },
    { id: 4, name: 'Carrot Seeds', price: 90, category: 'Seeds', image: '🌱', rating: 4.0 },
    { id: 5, name: 'Organic Fertilizer', price: 420, category: 'Pesticides', image: '🐛', rating: 4.8 },
    { id: 6, name: 'Banana Plant', price: 220, category: 'Fruits', image: '🍌', rating: 4.6 },
    { id: 7, name: 'Spinach Seeds', price: 80, category: 'Vegetables', image: '🥬', rating: 4.3 },
    { id: 8, name: 'Neem Oil', price: 280, category: 'Pesticides', image: '🐛', rating: 4.4 },
    { id: 9, name: 'Mango Graft', price: 320, category: 'Fruits', image: '🥭', rating: 4.9 },
    { id: 10, name: 'Brinjal Seeds', price: 95, category: 'Vegetables', image: '🍆', rating: 4.1 },
  ];

  // Categories
  const categories = ['All', 'Vegetables', 'Fruits', 'Seeds', 'Pesticides'];

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Vegetables': return <FaLeaf className="text-green-500" />;
      case 'Fruits': return <FaAppleAlt className="text-red-500" />;
      case 'Seeds': return <FaSeedling className="text-yellow-500" />;
      case 'Pesticides': return <FaBug className="text-amber-600" />;
      default: return <FaFilter className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Our Agricultural Products</h1>
          <p className="text-lg text-green-600">High-quality farming supplies for your needs</p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
            <FaFilter className="text-green-600" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-green-800"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 flex justify-center items-center h-40 bg-green-50 text-6xl">
                {product.image}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-700">₹{product.price}</span>
                  <button className="flex items-center justify-center p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <FaSearch className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;