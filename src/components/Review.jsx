import { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import { GiFarmer } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Review = () => {
  // Sample data for random reviews
  const reviewTemplates = [
    {
      comments: [
        "This farming dashboard completely transformed my crop yield!",
        "The weather predictions are incredibly accurate for my region.",
        "I've increased my profits by 30% since using these insights.",
        "The soil recommendations helped me fix nutrient deficiencies.",
        "Best agricultural tool I've used in my 20 years of farming!"
      ],
      names: ["Rajesh", "Amit", "Priya", "Sanjay", "Ananya", "Vikram"],
      roles: ["Wheat Farmer", "Organic Grower", "Commercial Farmer", "Vineyard Owner", "Vegetable Producer"]
    }
  ];

  // Generate random reviews
  const generateRandomReviews = () => {
    const reviews = [];
    for (let i = 0; i < 7; i++) {
      const template = reviewTemplates[0];
      const randomComment = template.comments[Math.floor(Math.random() * template.comments.length)];
      const randomName = template.names[Math.floor(Math.random() * template.names.length)];
      const randomRole = template.roles[Math.floor(Math.random() * template.roles.length)];
      const randomRating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars

      reviews.push({
        id: i,
        name: randomName,
        role: randomRole,
        rating: randomRating,
        comment: randomComment,
        date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString()
      });
    }
    return reviews;
  };

  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setReviews(generateRandomReviews());
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 7);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      i < rating ? 
        <FaStar key={i} className="text-yellow-400 inline-block" /> : 
        <FaRegStar key={i} className="text-yellow-400 inline-block" />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">What Farmers Say</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Trusted by agricultural professionals across the country
          </p>
        </div>

        {/* Main Review Display */}
        <div className="relative h-96 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className={`absolute inset-0 bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 text-green-500">
                  <FaQuoteLeft className="text-3xl opacity-30" />
                </div>
                <p className="text-lg text-gray-700 mb-6 flex-grow">
                  {review.comment}
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <GiFarmer className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="mb-1">{renderStars(review.rating)}</div>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {[...Array(7)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-green-600 w-6' : 'bg-green-200'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <motion.div 
              key={review.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <GiFarmer className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
                <div className="text-yellow-400">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <p className="text-xs text-gray-400 text-right">{review.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;