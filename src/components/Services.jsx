import { WiDaySunny, WiRain, WiCloudy, WiHumidity } from 'react-icons/wi'
import { FaLeaf, FaSeedling, FaChartLine, FaFlask } from 'react-icons/fa'
import { GiWheat, GiCorn, GiPlantWatering } from 'react-icons/gi'

const Services = () => {
  // Sample crop recommendation data
  const cropRecommendations = [
    {
      id: 1,
      name: "Maize",
      season: "Rainy Season",
      conditions: "Well-drained soil, 20-30°C",
      icon: <GiCorn className="text-yellow-500 text-3xl" />,
      suitability: "High"
    },
    {
      id: 2,
      name: "Wheat",
      season: "Winter",
      conditions: "Loamy soil, 15-20°C",
      icon: <GiWheat className="text-amber-700 text-3xl" />,
      suitability: "Medium"
    },
    {
      id: 3,
      name: "Rice",
      season: "Summer",
      conditions: "Clay soil, 25-35°C",
      icon: <FaSeedling className="text-green-600 text-3xl" />,
      suitability: "High"
    }
  ]

  // Sample market price data
  const marketPrices = [
    { crop: "Maize", current: 1850, previous: 1720, unit: "per quintal" },
    { crop: "Wheat", current: 2100, previous: 1950, unit: "per quintal" },
    { crop: "Rice", current: 3200, previous: 2950, unit: "per quintal" },
    { crop: "Tomato", current: 45, previous: 60, unit: "per kg" }
  ]

  // Soil testing parameters
  const soilParameters = [
    { name: "pH Level", value: "6.8", status: "Optimal" },
    { name: "Nitrogen", value: "2.4%", status: "Adequate" },
    { name: "Phosphorus", value: "15 ppm", status: "Low" },
    { name: "Potassium", value: "180 ppm", status: "High" },
    { name: "Organic Matter", value: "3.2%", status: "Good" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            Our Agricultural Services
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Farming Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Leveraging technology and expertise to enhance your agricultural productivity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Crop Recommendation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaLeaf className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Crop Recommendation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get personalized crop suggestions based on your soil type, weather patterns, and market demand.
              </p>
              <button className="text-green-600 font-medium hover:text-green-800 flex items-center">
                Explore recommendations
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Weather Forecasting */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <WiDaySunny className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Weather Forecasting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Accurate weather predictions tailored for farming activities with agricultural advisories.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                View forecast
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Soil Testing */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaFlask className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Soil Testing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive soil analysis to determine nutrient levels and optimal fertilization strategies.
              </p>
              <button className="text-amber-600 font-medium hover:text-amber-800 flex items-center">
                Test your soil
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Market Prices */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Market Prices</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time commodity prices and market trends to help you make informed selling decisions.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
                Check prices
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        
        {/* Crop Recommendations Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaLeaf className="text-green-600 text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Crop Recommendations</h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Based on your location's soil conditions, climate data, and historical patterns, here are the most suitable crops for the current season:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cropRecommendations.map((crop) => (
                <div key={crop.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{crop.name}</h4>
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {crop.season}
                      </span>
                    </div>
                    {crop.icon}
                  </div>
                  <p className="text-gray-600 mb-4">{crop.conditions}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Suitability:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      crop.suitability === 'High' ? 'bg-green-100 text-green-800' : 
                      crop.suitability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {crop.suitability}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Prices Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaChartLine className="text-purple-600 text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Commodity Market Prices</h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Current market rates for major agricultural commodities in your region (updated daily):
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commodity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Previous Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {marketPrices.map((item, index) => {
                    const change = ((item.current - item.previous) / item.previous * 100).toFixed(1)
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                              <GiPlantWatering className="text-green-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.crop}</div>
                              <div className="text-sm text-gray-500">{item.unit}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">₹{item.current.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">₹{item.previous.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {change >= 0 ? '+' : ''}{change}%
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Soil Testing Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <FaFlask className="text-amber-600 text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Soil Health Analysis</h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Understanding your soil composition is the first step toward optimized fertilization and irrigation:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Soil Parameters</h4>
                <div className="space-y-4">
                  {soilParameters.map((param, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">{param.name}</p>
                        <p className="text-sm text-gray-500">Optimal range</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{param.value}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          param.status === 'Optimal' || param.status === 'Good' ? 'bg-green-100 text-green-800' :
                          param.status === 'Adequate' ? 'bg-blue-100 text-blue-800' :
                          param.status === 'Low' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {param.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Fertilization Recommendations</h4>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold">Nitrogen:</span> Apply 50kg urea per acre before planting
                    </p>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold">Phosphorus:</span> Apply 75kg DAP per acre during sowing
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold">Organic Matter:</span> Add 5-10 tons compost per acre annually
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services