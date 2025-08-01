import { useNavigate } from 'react-router-dom';
import { GiFarmer, GiCorn, GiWheat } from 'react-icons/gi';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        className="max-w-2xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Icons */}
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <GiCorn className="text-5xl text-yellow-500" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GiFarmer className="text-6xl text-green-600" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GiWheat className="text-5xl text-amber-600" />
          </motion.div>
        </motion.div>

        {/* 404 Text */}
        <motion.h1 
          className="text-9xl font-bold text-green-800 mb-4"
          variants={itemVariants}
        >
          404
        </motion.h1>

        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Oops! Field Not Found
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          The page you're looking for has been plowed under or maybe it never grew here.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Take Me Back to the Farm
          </button>
        </motion.div>

        {/* Additional Help */}
        <motion.div 
          className="mt-12 text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>Still lost? Try our <a href="/sitemap" className="text-green-600 hover:underline">sitemap</a> or <a href="/contact" className="text-green-600 hover:underline">contact support</a>.</p>
        </motion.div>
      </motion.div>

      {/* Animated floating elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-float1"></div>
      <div className="absolute top-1/4 right-20 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-float2"></div>
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-blue-200 rounded-full opacity-20 animate-float3"></div>
    </div>
  );
};

export default NotFound;