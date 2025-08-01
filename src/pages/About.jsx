import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">About AgroVision Care</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering sustainable agricultural solutions for a greener tomorrow
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At AgroVision Care, we're committed to revolutionizing agriculture through innovative
            technologies that increase yield while preserving our planet's resources.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">Developing eco-friendly farming practices</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-3">Innovation</h3>
              <p className="text-gray-600">Harnessing cutting-edge agri-tech solutions</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-3">Community</h3>
              <p className="text-gray-600">Empowering farmers with knowledge and tools</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Our Story</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/images/farm-tech.jpg" 
                alt="AgroVision technology in action" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2015, AgroVision Care began as a small research initiative aimed at solving
                water conservation challenges in arid farming regions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Today, we've grown into a leading agri-tech provider with solutions deployed across
                12 countries, helping over 50,000 farmers increase their productivity sustainably.
              </p>
              <button className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300">
                Learn About Our Technology
              </button>
            </div>
          </div>
        </div>

        {/* Team Preview */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-2">Meet Our Team</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            A diverse group of agricultural experts, engineers, and visionaries working together
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Agricultural Scientists', 'Tech Engineers', 'Field Agents', 'Research Team'].map((team, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="h-40 w-40 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-800 text-4xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium text-green-800">{team}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;