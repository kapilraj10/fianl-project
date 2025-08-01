import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserDropdownOpen(false)
    navigate('/')
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 py-3'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <span className="text-xl font-bold text-green-800">AgroVision</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-green-50'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/about' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-green-50'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/services' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-green-50'}`}
            >
              Services
            </Link>
            <Link 
              to="/product" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/services' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-green-50'}`}
            >
              Product
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/contact' ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-green-50'}`}
            >
              Contact
            </Link>

            {/* User Authentication */}
            {isLoggedIn ? (
              <div className="relative ml-4">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 focus:outline-none"
                >
                  <span className="font-medium">My Account</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${userDropdownOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 w-full text-left"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-3 ml-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-green-700 hover:text-green-800"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg py-2 border border-gray-100">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`block w-full text-left px-4 py-2 text-sm ${location.pathname === '/' ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`block w-full text-left px-4 py-2 text-sm ${location.pathname === '/about' ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`block w-full text-left px-4 py-2 text-sm ${location.pathname === '/contact' ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}
            >
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <div className="border-t border-gray-200 my-1"></div>
                <Link
                  to="/profile"
                  onClick={closeMobileMenu}
                  className={`block w-full text-left px-4 py-2 text-sm ${location.pathname === '/profile' ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="border-t border-gray-200 my-1"></div>
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar